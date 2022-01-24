import './App.css';
import Petunia from './Components/Thierry/petunia';
import ThierryComponent from './Components/Thierry/Thierry';

function App() {
  return (
    <div className="App">
      <ThierryComponent says='Hello,'/>
      <Petunia/>
    </div>
  );
}

export default App;
