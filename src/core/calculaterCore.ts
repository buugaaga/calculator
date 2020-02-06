
export function calculatingDecimal(previusVal: string, inputedVal: string): string {
  if (isHaveDecimal(previusVal)) return previusVal
  return previusVal.concat(inputedVal)
}

export function isHaveDecimal(strCheck: string): boolean {
  return strCheck.includes(".")
}

export function isNumber(input: string): boolean {
  return /[0-9]/.test(input)
}

