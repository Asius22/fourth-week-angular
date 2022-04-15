import { Screen } from "./Screen";
import { Tastierino } from "./Tastierino";

export function Container({ children }) {
  let value = 0;
  return (
    <div className="container">
      <Screen value={value} />
      <Tastierino />
    </div>
  );
}
