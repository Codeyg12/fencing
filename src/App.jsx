import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from './Enter'
import Home from "./Home";
import About from "./About";
import Testimonials from "./Testimonials";
import Quote from "./Quote";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
