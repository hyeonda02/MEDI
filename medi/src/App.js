import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/Header";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Calc from "./pages/Calc";
import Location from "./pages/location"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
