import { Expression } from './expression'
import { Money } from './money'

interface Rates {
  [index: string]: number
}

interface Pair {
  from: string
  to: string
}

const currenciesToKey = (currencies: Pair): string => {
  return `${currencies.from}-${currencies.to}`
}

export class Bank {
  private _rates: Rates = {}

  reduce (source: Expression, to: string): Money {
    return source.reduce(this, to)
  }

  addRate (from: string, to: string, rate: number): void {
    const currencies: Pair = { from, to }
    this._rates[currenciesToKey(currencies)] = rate
  }

  rate (from: string, to: string): number {
    if (from === to) {
      return 1
    }

    const currencies: Pair = { from, to }
    return this._rates[currenciesToKey(currencies)]
  }
}