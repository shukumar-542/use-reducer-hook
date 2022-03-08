import logo from './logo.svg';
import './App.css';
import ReduceCount from './components/ReducerCount/ReduceCount';
import PatientManagement from './components/PatientManagement/PatientManagement';



function App() {
  return (
    <div className="App">
      <ReduceCount/>
      <PatientManagement/>
    </div>
  );
}

export default App;
