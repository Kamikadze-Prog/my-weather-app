export function getHour(date: string) {
  return new Date(date).getHours() + ":00";
}
