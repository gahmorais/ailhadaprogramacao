export function capitalFirstLetter(text: string): string {
  const newText = `${text[0].toUpperCase()}${text.substr(1)}`;
  return newText;
}
