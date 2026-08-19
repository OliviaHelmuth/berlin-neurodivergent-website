// Converts between the Europe/Berlin wall-clock times admins type into
// <input type="datetime-local"> fields and the UTC timestamps stored in the
// database. Uses the same month-level CET/CEST approximation as
// scripts/seed-events.ts (late-Mar–late-Oct treated as CEST) rather than a
// full IANA tz lookup — acceptable for a community events calendar, not for
// anything billing- or contract-sensitive.
function isCEST(month: number) {
  return month >= 4 && month <= 10;
}

export function berlinInputToUTC(dateTimeLocal: string): Date {
  const month = Number(dateTimeLocal.slice(5, 7));
  const offset = isCEST(month) ? "+02:00" : "+01:00";
  return new Date(`${dateTimeLocal}:00${offset}`);
}

export function utcToBerlinInput(date: Date): string {
  const month = date.getUTCMonth() + 1;
  const offsetHours = isCEST(month) ? 2 : 1;
  const shifted = new Date(date.getTime() + offsetHours * 60 * 60 * 1000);
  return shifted.toISOString().slice(0, 16);
}
