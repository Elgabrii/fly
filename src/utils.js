
//this file is concerned with common utilities used across the website

export const loadArray = (size) => {
  let array = []
  for (let i = 1; i <= size; i++) {
    array.push(i)
  }
  return array
}