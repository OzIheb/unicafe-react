import { useState } from "react";
import Button from "./components/Button";
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
    </div>
  );
};

export default App;
