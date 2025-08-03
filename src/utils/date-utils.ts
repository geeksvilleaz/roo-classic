export function formatDateForForm(date: Date | string): string {
  if (!date) {
    return '';
  }

  const t = new Date(String(date));
  const z = t.getTimezoneOffset() * 60 * 1000;
  const tLocal = Number(t) - Number(z);
  const tLocalDate = new Date(tLocal);
  return tLocalDate.toISOString().slice(0, 16);
}

export function formatDateForDB(date: Date | string): string {
  return new Date(String(date)).toISOString();
}
