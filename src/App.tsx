import { FamilyTree } from "./components/FamilyTree";
import { flattenFamily } from "./utils/flattenFamily";
import { averageShoeSizeByGender } from "./utils/averageShoeSizeByGender";
import { forecastHeight } from "./utils/forecastHeight";
import type { Person } from "./types/person";
import type { GrowthPoint } from "./types/growthPoint";
import { AgeBar } from "./components/AgeBar";

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

function App() {
  console.log(henning);
  /*
      During the solution of the tasks, please consider handling crappy data.
    */
  //lars.Children = [henning];

  const allPeople = flattenFamily(henning);
  const avgShoeSize = averageShoeSizeByGender(allPeople);

  const larsGrowth: GrowthPoint[] = Object.entries(
    lars.HeightData ?? {}
  ).map(([age, height]) => ({
    age: Number(age),
    height: Number(height),
  }));

  return (
    // <div className="App">
    //   <ol>
    //     <li>Write some code to show and navigate the family tree of Henning</li>
    //     <li>Visualize the ages of the family in a bar chart</li>
    //     <li>Calculate and show the average shoe size per gender</li>
    //     <li>
    //       Visualize the growth of Lars through the years. Make a <b>forecast</b>{" "}
    //       for his height at age 18.
    //     </li>
    //   </ol>
    // </div>

    <div className="App">
        <h2>Family Tree</h2>
        <ul>
          <FamilyTree person={henning} />
        </ul>

        <h2>Ages</h2>
        {allPeople.map((p) => (
          <div key={`${p.Name}-${p.Age}`} style={{ marginBottom: 6}}>
            <span style={{ width: 100, display: "inline-block" }}>
              {p.Name}
            </span>
            
            <AgeBar person={p} />

            <span style={{ marginLeft: 8 }}>{p.Age}</span>
          </div>
        ))}

        <h2>Average Shoe Size</h2>
        {Object.entries(avgShoeSize).map(([gender, avg]) => (
          <div key={gender}>
            {gender}: {avg.toFixed(1)}
          </div>
        ))}

        <h2>Lars' Growth</h2>
        {larsGrowth.map((d) => (
          <div key={d.age}>
            Age {d.age}: {d.height} cm
          </div>
        ))}

        <strong>
          Forecast at 18: {forecastHeight(larsGrowth).toFixed(1)} cm
        </strong>
    </div>
  );
}

export default App;