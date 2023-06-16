import "./App.css";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import ClickIncrease from "./ClickIncrease";
import HoverIncrease from "./HoverIncrease";

function App() {
  return (
    <div className="App">
      <p>Class Based Approach</p>
      <div>
        <ClickCounter name="Akash" />
        <HoverCounter name="User" />
      </div>
      <p>Function Based Approach</p>
      <div>
        <ClickIncrease number={2} />
        <HoverIncrease number={3} />
      </div>
    </div>
  );
}

export default App;
