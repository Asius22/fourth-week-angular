import { useState } from "react";
import "../componentStyles/Tastierino.css";
import { SingleButton } from "./SingleButton";

const pulsanti = [
  "(",
  "CE",
  ")",
  "C",
  1,
  2,
  3,
  "+",
  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "x",
  ".",
  0,
  "=",
  "+",
];
export function Tastierino() {
  const [value, setValue] = useState(0);
  const returnFunction = (el) => {
    if (!isNaN(el)) return valuePressed;
    else if (el === "C") return CPressed;
  };
  const valuePressed = (el) => {
    setValue(value * 10 + el);
  };

  const CPressed = () => {
    setValue(0);
  };
  return (
    <div className="tastierino">
      {pulsanti.map((el) => {
        return (
          <SingleButton
            classe={isNaN(el) ? "" : "number"}
            valore={el}
            onclick={() => {
              setValue(value * 10 + el);
              console.log("value: " + (value * 10 + el));
            }}
          />
        );
      })}
    </div>
  );
}
