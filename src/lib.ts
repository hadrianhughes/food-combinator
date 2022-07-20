import { Food, FullFood } from './types'

export const count = <T = unknown>(arr: T[], p: (x: T) => boolean): number =>
  arr.reduce((c, x) => p(x) ? c + 1 : c, 0)

export const selectFood = (options: Food[]): Food => {
  const noWithoutWeight = count(options, x => !x.weight)
  const defaultWeight = noWithoutWeight === 0 ? 0 : 1/noWithoutWeight
  const normalised: FullFood[] = options.reduce((acc, o) => [...acc, { weight: defaultWeight, ...o }], [] as FullFood[])

  const r = Math.random()

  const cumulativeWeight = (index: number): number => {
    let sum = 0;

    for (let i = 0;i <= index;i++) {
      sum += normalised[i].weight
    }

    return sum
  }

  for (let i = 0;i < normalised.length;i++) {
    if (cumulativeWeight(i) >= r) {
      return normalised[i]
    }
  }

  return normalised[normalised.length - 1]
}
