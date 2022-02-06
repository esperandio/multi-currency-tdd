import { Bank } from './bank'
import { Expression } from './expression'
import { Money } from './money'

export class Sum implements Expression {
  private readonly _augend: Expression
  private readonly _addend: Expression

  constructor (augend: Expression, addend: Expression) {
    this._augend = augend
    this._addend = addend
  }

  augend (): Expression {
    return this._augend
  }

  addend (): Expression {
    return this._addend
  }

  reduce (bank: Bank, to: string): Money {
    const amount = this._augend.reduce(bank, to).amount() + this._addend.reduce(bank, to).amount()
    return new Money(amount, to)
  }

  plus (addend: Expression): Expression {
    return new Sum(this, addend)
  }

  times (multiplier: number): Expression {
    return new Sum(
      this._augend.times(multiplier),
      this._addend.times(multiplier)
    )
  }
}
