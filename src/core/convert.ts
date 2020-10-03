// import { SetStateAction, Dispatch } from 'react'

type ConverType = (formula: string, valueOfButton: string) => string

const isNumber = (value: string): boolean => {
  return !isNaN(Number(value))
}

const isTheOnlyEqualZero = (formula: string): boolean => {
  return formula === '0'
}

export const convert: ConverType = (formula, value) => {
  const result = formula + value
  const isOnlyZero = isTheOnlyEqualZero(formula)
  if (isNumber(value)) return isOnlyZero ? value : result
  
  if (value === '←') return formula.length === 1 ? '0' : formula.slice(0, -1)

  if (value === 'AC') return '0'

  return result
}