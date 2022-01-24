export abstract class Money {
  protected _amount: number;
  protected _currency: string

  constructor (amount: number, currency: string) {
    this._amount = amount
    this._currency = currency
  }

  static dollar (amount: number): Dollar {
    return new Dollar(amount, 'USD')
  }

  static euro (amount: number): Euro {
    return new Euro(amount, 'EUR')
  }

  equals (other: Money): boolean {
    if (this.constructor !== other.constructor) {
      return false
    }

    return this._amount === other._amount
  }

  currency (): string {
    return this._currency
  }

  abstract times (multiplier: number): Money
}

export class Dollar extends Money {
  times (multiplier: number): Dollar {
    return Money.dollar(this._amount * multiplier)
  }
}

export class Euro extends Money {
  times (multiplier: number): Euro {
    return Money.euro(this._amount * multiplier)
  }
}
