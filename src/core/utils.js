// Pure functions
export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
  if (start > end) {
    [end, start] = [start, end]// деструктуризация из массива где мы в переменную end помещяем значение старта и наоборот
  }
  return new Array(end-start+1).fill('').map((_, index) => start+index)
}
