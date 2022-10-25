export function isContentfulId(str: string): boolean {
  return str.length === 22 && str.toLowerCase() !== str.toUpperCase();
}
