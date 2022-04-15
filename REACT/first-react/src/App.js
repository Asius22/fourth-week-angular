import './App.css';
import Header from './componentsFirsExercise/Header';
function App() {
  let obj = {
    name: "ciro", 
    lastName : "malafronte"
  }
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
