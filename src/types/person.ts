export type Person = {
  Name: string;
  Age: number;
  ShoeSize: number;
  Gender: "M" | "F" | "Other" | "Unknown";
  Children: Person[];
  HeightData?: Record<number, number>;
}