import { calculateTotalTime } from './calculate-total-time'

it.each([
  [0, 8, [11, 0]],
  [0, 6, [8, 15]],
  [1, 6, [7, 30]],
  [0.5, 6, [8, 0]],
  [1.25, 6, [7, 45]],
] as [number, number, ReturnType<typeof calculateTotalTime>][])(
  'calculates base work %d and total work %d correctly',
  (...args) => {
    const [baseWork, totalWork, longBreakInterval] = args.slice(
      0,
      args.length - 1
    ) as number[]
    const expected = args.slice(-1)[0]
    const actual = calculateTotalTime({
      baseWork,
      totalWork,
      longBreakInterval,
    })

    expect(actual).toEqual(expected)
  }
)
