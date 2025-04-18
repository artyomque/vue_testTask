export default function formatDate(date: Date, formatType = "fullDate"): string {
  if (formatType === "fullDate") {
    return date.toLocaleString("ru-RU", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  if (formatType === "time") {
    return date.toLocaleString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}
