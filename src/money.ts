export class Money {
  protected amount: number;

  equals (other: Money): boolean {
    return this.amount === other.amount
  }
}
