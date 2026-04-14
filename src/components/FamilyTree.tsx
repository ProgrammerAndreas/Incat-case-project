import type { Person } from "../types/person";

export function FamilyTree({ person }: {person: Person}) {
  if (!person) return null;

  return (
    <li>
      {person.Name} ({person.Age})
      {person.Children?.length > 0 && (
        <ul>
          {person.Children.map((child, i) => (
            <FamilyTree key={i} person={child} />
          ))}
        </ul>
      )}
    </li>
  );
}