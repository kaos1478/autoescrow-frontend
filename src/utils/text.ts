export const Ellipse = (text: string) => {
  if (text.length > 8) {
    return text.substr(0, 5) + '...' + text.substr(text.length - 5, text.length)
  } else {
    return text
  }
}
