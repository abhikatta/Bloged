export const FormatDate = (date: Date) => date.toString().split("T")[0].replaceAll("-", ".");
