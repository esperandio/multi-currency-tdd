import { Dollar } from './dollar'

describe('Dollar', () => {
  it('should return 10 when five dollars area multiplied by two', () => {
    const five: Dollar = new Dollar(5)
    const product: Dollar = five.times(2)
    expect(product.amount).toEqual(10)
  })

  it('should return true when dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})
