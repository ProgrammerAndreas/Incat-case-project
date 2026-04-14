import type { Person } from "../types/person";

export function averageShoeSizeByGender(people: Person[]) {
  const groups: Record<string, number[]> = {};

  for (const person of people) {
    if (!person.Gender || !person.ShoeSize) continue;

    groups[person.Gender] ??= [];
    groups[person.Gender].push(person.ShoeSize);
  }

  const result: Record<string, number> = {};

  for (const [gender, sizes] of Object.entries(groups)) {
    result[gender] = 
      sizes.reduce((sum, x) => sum + x, 0) / sizes.length;
  }

  return result;
}