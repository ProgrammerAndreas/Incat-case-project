import type { GrowthPoint } from "../types/growthPoint";

export function forecastHeight(data: GrowthPoint[]): number {
  if (data.length < 2) return 0;

  const last = data.at(-1)!;
  const prev = data.at(-2)!;

  const growth = last.height - prev.height;
  const remainingYears = 18 - last.age;

  return last.height + growth * remainingYears;
}