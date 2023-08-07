import './App.css';
import Burger from './components/burger';
import Checkout from './components/checkout';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <Router>
      <h1>React Burger App</h1>

        <Routes>
          <Route path="/" element={<Burger />} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
