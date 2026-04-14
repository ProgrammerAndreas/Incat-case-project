import type { Person } from "../types/person";

type Props = {
  person: Person;
};

export function AgeBar({ person }: Props) {
  const width = person.Age * 5;

  return (
    <div
      style={{
        display: "inline-block",
        height: 10,
        width: `${width}px`,
        background: "steelblue",
      }}
    />
  );
}