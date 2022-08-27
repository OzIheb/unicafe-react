import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedbac</h1>
      <Button text="good" />
      <Button text="neutral" />
      <Button text="bad" />
      <h1>statistics</h1>
      <Display text="good" score={good} />
      <Display text="neutral" score={neutral} />
      <Display text="bad" score={bad} />
    </div>
  );
};

export default App;
