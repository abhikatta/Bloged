"use server";

import { revalidateTag } from "next/cache";

export async function revalidateData(path: string) {
  revalidateTag(path);
}

export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h24",
  };
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  return dateTimeFormat.format(date);
};
