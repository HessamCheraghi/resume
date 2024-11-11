export function toTitleCase(parameter: string) {
  return parameter
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function toLowerCase(parameter: string) {
  return parameter.toLowerCase();
}
export function toUpperCase(parameter: string) {
  return parameter.toUpperCase();
}
