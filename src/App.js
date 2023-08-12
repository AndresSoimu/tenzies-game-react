import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

// function allNewDice(){

//   function getRandomInt() {
//     return Math.floor(Math.random() * 6);
//   }

//   diceArray.push(getRandomInt())

// }

// allNewDice()
// console.log(diceArray)

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  }
  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
