import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (btnType) => {
    const handler = () => {
      if (btnType === "good") setGood(good + 1);
      else if (btnType === "neutral") setNeutral(neutral + 1);
      else setBad(bad + 1);
    };
    return handler;
  };

  return (
    <div>
      <h1>give feedbac</h1>
      <Button text="good" handleClick={handleClick("good")} />
      <Button text="neutral" handleClick={handleClick("neutral")} />
      <Button text="bad" handleClick={handleClick("bad")} />
      <h1>statistics</h1>
      <Display value={good} text="good" />
      <Display value={neutral} text="neutral" />
      <Display value={bad} text="bad" />
    </div>
  );
};

export default App;
