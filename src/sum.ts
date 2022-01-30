import { Bank } from './bank'
import { Expression } from './expression'
import { Money } from './money'

export class Sum implements Expression {
  private readonly _augend: Money
  private readonly _addend: Money

  constructor (augend: Money, addend: Money) {
    this._augend = augend
    this._addend = addend
  }

  augend (): Money {
    return this._augend
  }

  addend (): Money {
    return this._addend
  }

  reduce (bank: Bank, to: string): Money {
    const amount = this._augend.amount() + this._addend.amount()
    return new Money(amount, to)
  }
}
