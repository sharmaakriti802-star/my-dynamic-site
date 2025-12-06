import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      {/* Top navigation */}
      <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #eee" }}>
        <h2 style={{ display: "inline-block", marginRight: "2rem" }}>
          Whizzystack
        </h2>
        <nav style={{ display: "inline-block" }}>
          <Link style={{ marginRight: "1rem" }} to="/">
            Home
          </Link>
          <Link style={{ marginRight: "1rem" }} to="/services">
            Services
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Page content */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<HomePage section="services" />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
