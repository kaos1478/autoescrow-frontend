export const Ellipse = (text: string) => {
  if (text.length > 8) {
    return text.substr(0, 6) + '...' + text.substr(text.length - 6, text.length)
  } else {
    return text
  }
}
