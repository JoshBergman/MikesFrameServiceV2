import { Route, Routes, Navigate } from "react-router-dom";

import Header from './Components/UI/Header';
import './App.css';
import styles from './App.module.css';
import HomePage from "./Components/Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.modal} id="portal-root"></div>
      <Routes>
      <Route 
        path="/home"
        element={<HomePage />}
      />
      <Route
        path="*"
        element={<Navigate to="/home" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
