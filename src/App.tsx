import { FamilyTree } from "./components/FamilyTree";
import { flattenFamily } from "./utils/flattenFamily";
import { averageShoeSizeByGender } from "./utils/averageShoeSizeByGender";
import { forecastHeight } from "./utils/forecastHeight";
import { lars, henning } from "./data/people";

import type { GrowthPoint } from "./types/growthPoint";
import { AgeBar } from "./components/AgeBar";

function App() {
  const allPeople = flattenFamily(henning);
  const avgShoeSize = averageShoeSizeByGender(allPeople);

  const larsGrowth: GrowthPoint[] = Object.entries(
    lars.HeightData ?? {}
  ).map(([age, height]) => ({
    age: Number(age),
    height: Number(height),
  }));

  return (
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