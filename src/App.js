import './App.css';
import Counter from './Components/CounterApp';
import Click2 from "./Components/Click2";
import ParentComp from './Components/ParentCompForP&R';
import ClassProps from './Components/ClassProps'
import FunctionalProps from './Components/FunctionalProps'
import ClassSTATE from './Components/ClassSTATE';

function App() {
  return (
    <div className="App">

      <Counter/>
      <Click2/>
      <ParentComp/>
      {/* This section is for pure component */}
      <ClassProps name="ADEKUNLE" location="Lagos"/>
      <ClassProps name="JAMES" location="Abuja"/>
      <ClassProps name="PETERS" location="PortHarcourt"/>
      {/* ---------------------------- */}
      
      <FunctionalProps name="BAYODE" location="Ibadan"/>
      <ClassSTATE/>
    </div>
  )
}

export default App;
