import type { Person } from "../types/person";

const lars: Person = {
  Name: "Lars",
  Age: 15,
  ShoeSize: 46,
  Gender: "M",
  Children: [],
  HeightData: {
    0: 50,
    1: 75,
    2: 82,
    3: 89,
    4: 95,
    5: 101,
    6: 107,
    7: 112.5,
    8: 118,
    9: 123.5,
    10: 129,
    11: 134.5,
    12: 140,
    13: 149.5,
    14: 159,
    15: 168.5,
  },
};
const iben: Person = {
  Name: "Iben",
  Age: 26,
  ShoeSize: 38,
  Gender: "F",
  Children: [],
};
const bente: Person = {
  Name: "Bente",
  Age: 46,
  ShoeSize: 37,
  Gender: "F",
  Children: [lars],
};
const viggo: Person = {
  Name: "Viggo",
  Age: 47,
  ShoeSize: 42,
  Gender: "M",
  Children: [iben],
};
const henning: Person = {
  Name: "Henning",
  Age: 65,
  ShoeSize: 44,
  Gender: "M",
  Children: [viggo, bente],
};

export {lars, henning}