import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateTrip from './components/CreateTrip';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<CreateTrip />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
