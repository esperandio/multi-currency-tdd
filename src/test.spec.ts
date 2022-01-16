import { Dollar } from './dollar'

describe('Dollar', () => {
  it('should return 10 when five dollars area multiplied by two', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toEqual(10)
  })
})
