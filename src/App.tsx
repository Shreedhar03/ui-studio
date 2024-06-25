import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import ListChallenges from "./pages/ListChallenges";
import Challenge from "./pages/Challenge";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<ListChallenges />} />
          <Route path="/challenge/:id" element={<Challenge />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
