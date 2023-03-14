import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        {/* <div className="background"></div> */}
        <h1>Triple Striping Construction</h1>
        <nav className="link-list">
          <Link to="/about">
            About Us
          </Link>
          <Link to="/testimonials">
            Testimonials
          </Link>
          <Link to="/quote">
            Request a Quote
          </Link>
        </nav>
      </header>
    </>
  );
}
