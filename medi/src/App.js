import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Signup />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
