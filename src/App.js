import logo from './logo.svg';
import './App.css';
import ReduceCount from './components/ReducerCount/ReduceCount';
import { useReducer } from 'react';

const initialState = {count :0}
const reducer = (state, action) =>{

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <ReduceCount/>
    </div>
  );
}

export default App;
