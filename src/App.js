
import './App.css';
import ChildComponent from './components/ChildComponent';
import CoffeeComponent from './components/CoffeesComponent';
import DateComponent from './components/DateComponent';


function App() {
  // all javascript
  
  //in return only jsx
  return (
    <div className="App">
      <header className="App-header">
        <CoffeeComponent/>
        <DateComponent />
        <ChildComponent />
      </header>
    </div>
  )
}

export default App;
