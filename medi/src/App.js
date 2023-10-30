import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/Header";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Pills from "./pages/Pills";
import Calc from "./pages/Calc";
import Result from "./pages/Result";
import Loc from "./pages/Loc";


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
          <Route path="/pills" element={<Pills />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/result" element={<Result />} />
          <Route path="/location" element={<Loc />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
