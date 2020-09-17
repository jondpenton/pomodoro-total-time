import { calculateTotalTime } from './calculate-total-time'

it.each([
  [0, 8, [10, 0]],
  [0, 6, [7, 30]],
  [1, 6, [7, 0]],
  [0.5, 6, [7, 30]],
  [1.25, 6, [7, 15]],
] as [number, number, ReturnType<typeof calculateTotalTime>][])(
  'calculates base work %d and total work %d correctly',
  (baseWork, totalWork, expected) => {
    const actual = calculateTotalTime({ baseWork, totalWork })

    expect(actual).toEqual(expected)
  }
)
