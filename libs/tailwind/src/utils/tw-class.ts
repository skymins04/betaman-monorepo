import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const twClass = (...args: ClassValue[]) => twMerge(clsx(...args));
