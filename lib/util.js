const valueOf = numUnit => parseFloat(numUnit)
const unitOf = numUnit => {
  const output = /[a-z]+/.exec(numUnit)
  if(!output) {
    return ''
  }
  return output[0]
}

export const floor = number => `${ Math.floor(valueOf(number)) }${ unitOf(number) }`
export const ceil = number => `${ Math.ceil(valueOf(number)) }${ unitOf(number) }`
export const percentage = number => `${ valueOf(number) * 100 }%`
export const add = (n1, n2) => `${ valueOf(n1) + valueOf(n2) }${ unitOf(n1) || unitOf(n2) || '' }`
export const sub = (n1, n2) => `${ valueOf(n1) - valueOf(n2) }${ unitOf(n1) || unitOf(n2) || '' }`
export const mul = (n1, n2) => `${ valueOf(n1) * valueOf(n2) }${ unitOf(n1) || unitOf(n2) || '' }`
export const div = (n1, n2) => `${ valueOf(n1) / valueOf(n2) }${ unitOf(n1) || unitOf(n2) || '' }`
