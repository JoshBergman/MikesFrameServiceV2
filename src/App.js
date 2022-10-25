import { Route, Routes, Navigate } from "react-router-dom";

import Header from './Components/UI/Header';
import './App.css';
import styles from './App.module.css';
import HomePage from "./Components/Pages/HomePage";
import Services from "./Components/Pages/Services";
import About from "./Components/Pages/About";
import FindUs from "./Components/Pages/FindUs";
import Footer from './Components/UI/Footer';

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
        path="/services"
        element={<Services />}
      />
      <Route 
        path="/about"
        element={<About />}
      />
      <Route 
        path="/find-us"
        element={<FindUs />}
      />
      <Route
        path="*"
        element={<Navigate to="/home" replace />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
