// @effect-diagnostics globalDate:off -- Usage windows are calendar days in the viewer's zone, derived from wall-clock "now" via Intl.
/**
 * Display formatting for the usage page.
 *
 * @module usageFormat
 */
import { UsageDay, type UsageSummaryInput } from "@t3tools/contracts";

const CURRENCY = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const INTEGER = new Intl.NumberFormat("en-US");

export function formatUsd(value: number): string {
  return CURRENCY.format(value);
}

export function formatCount(value: number): string {
  return INTEGER.format(Math.round(value));
}

/**
 * Formats token counts with Chinese large-number units used throughout the
 * usage page: 亿 at one hundred million, 万 below that, and comma-separated
 * integers for smaller values.
 */
export function formatTokens(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 1e8) return `${trim(value / 1e8)}亿`;
  if (abs >= 1e4) return `${trim(value / 1e4)}万`;
  return INTEGER.format(Math.round(value));
}

function trim(value: number): string {
  const abs = Math.abs(value);
  const digits = abs >= 100 ? 0 : abs >= 10 ? 1 : 2;
  return value
    .toFixed(digits)
    .replace(/(\.\d*?[1-9])0+$/, "$1")
    .replace(/\.0+$/, "");
}

export function formatPercent(share: number, digits = 1): string {
  return `${(share * 100).toFixed(digits)}%`;
}

/** `2026-08-07` to `8月7日`. */
export function formatDayShort(day: string): string {
  const [year, month, dayOfMonth] = day.split("-").map((part) => Number(part));
  if (year === undefined || month === undefined || dayOfMonth === undefined) return day;
  return `${month}月${dayOfMonth}日`;
}

/** Inclusive day list between two `YYYY-MM-DD` bounds. */
export function enumerateDays(sinceDay: string, untilDay: string): readonly string[] {
  const days: string[] = [];
  const start = Date.parse(`${sinceDay}T00:00:00Z`);
  const end = Date.parse(`${untilDay}T00:00:00Z`);
  if (Number.isNaN(start) || Number.isNaN(end) || end < start) return days;

  for (let cursor = start; cursor <= end; cursor += 86_400_000) {
    days.push(new Date(cursor).toISOString().slice(0, 10));
  }
  return days;
}

/**
 * The window the page requests, expressed in the viewer's own time zone so days
 * line up with what they actually experienced.
 */
export function makeWindow(days: number, now = new Date()): UsageSummaryInput {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const format = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const untilDay = format.format(now);
  // Subtracting fixed milliseconds from `now` lands on the wrong calendar day
  // around a DST transition. Only "today" needs the zone; the window start is
  // pure calendar arithmetic on that day, done in UTC where days are uniform.
  const [year = 0, month = 1, dayOfMonth = 1] = untilDay
    .split("-")
    .map((part) => Number.parseInt(part, 10));
  const start = new Date(Date.UTC(year, month - 1, dayOfMonth - (days - 1)));
  return {
    sinceDay: UsageDay.make(start.toISOString().slice(0, 10)),
    untilDay: UsageDay.make(untilDay),
    timeZone,
  };
}
