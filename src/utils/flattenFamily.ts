import type { Person } from "../types/person";

export function flattenFamily(
  person: Person, 
  visited = new Set<Person>()
): Person[] {
  if (!person || visited.has(person)) return [];

  visited.add(person);

  return [
    person,
    ...(person.Children || []).flatMap((child) =>
      flattenFamily(child, visited )
    ),
  ];
}