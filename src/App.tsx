import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import ListChallenges from "./pages/ListChallenges";
import Challenge from "./pages/Challenge";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </>
  );
};

function LocationProvider({ children }: { children: React.ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/challenges" element={<ListChallenges />} />
      <Route path="/challenge/:id" element={<Challenge />} />
    </Routes>
  );
}

export default App;
