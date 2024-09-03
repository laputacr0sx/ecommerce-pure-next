export type Category =
  | "CHASSIS"
  | "RAM"
  | "COOLER"
  | "DISPLAY"
  | "POWER_SUPPLY"
  | "FAN"
  | "GPU"
  | "MOTHER_BOARD"
  | "MOUSE"
  | "KEYBOARD"
  | "SSD"
  | "HEADPHONE"
  | "ROUTER"
  | "NAS"
  | "HDD"
  | "CPU";

const categories = [
  "CHASSIS",
  "RAM",
  "COOLER",
  "DISPLAY",
  "POWER_SUPPLY",
  "FAN",
  "GPU",
  "MOTHER_BOARD",
  "MOUSE",
  "KEYBOARD",
  "SSD",
  "HEADPHONE",
  "ROUTER",
  "NAS",
  "HDD",
  "CPU",
] as const;
