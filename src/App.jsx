import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from './pages/Enter'
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Quote from "./pages/Quote";

// import {} from './pages'

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
