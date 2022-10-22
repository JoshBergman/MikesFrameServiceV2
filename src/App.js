import { Route, Routes, Navigate } from "react-router-dom";

import Header from './Components/UI/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route to="/"/>
      </Routes>
    </div>
  );
}

export default App;
