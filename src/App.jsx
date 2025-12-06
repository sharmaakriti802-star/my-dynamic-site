import ContactForm from "./ContactForm";

function App() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Top navigation */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "#ffffffcc",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #eee",
          padding: "0.75rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ fontWeight: 700 }}>Whizzystack</div>
        <nav style={{ fontSize: "0.9rem" }}>
          <a href="#services" style={{ marginRight: "1rem" }}>
            Services
          </a>
          <a href="#why" style={{ marginRight: "1rem" }}>
            Why us
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero section */}
      <section
        id="top"
        style={{
          padding: "4rem 2rem 3rem",
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
          gap: "2.5rem"
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "2.4rem",
              lineHeight: 1.15,
              marginBottom: "1rem"
            }}
          >
            React, AI & automation that
            <br />
            actually ships.
          </h1>
          <p style={{ fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            We help teams turn ideas into working products – fast. React
            frontends, AI agents, and workflow automation built on top of your
            existing tools.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "1.5rem",
              color: "#444"
            }}
          >
            <li>• React/Next.js web apps & dashboards</li>
            <li>• AI chatbots & assistants (web + WhatsApp)</li>
            <li>• Integrations & automation around CRMs, ERPs, and APIs</li>
          </ul>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.4rem",
              background: "#111827",
              color: "#fff",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: "0.95rem"
            }}
          >
            Tell us what you want to build →
          </a>
        </div>

        <div
          style={{
            border: "1px solid #eee",
            borderRadius: 12,
            padding: "1.5rem",
            background: "#fafafa"
          }}
        >
          <h3 style={{ marginBottom: "0.75rem" }}>Typical outcomes</h3>
          <ul
            style={{
              paddingLeft: "1.1rem",
              margin: 0,
              fontSize: "0.95rem",
              lineHeight: 1.6
            }}
          >
            <li>Reduce manual ops work with smart automation</li>
            <li>Give customers instant responses via AI agents</li>
            <li>Launch new internal tools without heavy IT cycles</li>
          </ul>
        </div>
      </section>

      {/* Services section */}
      <section
        id="services"
        style={{
          padding: "2rem 2rem 3rem",
          maxWidth: 1080,
          margin: "0 auto"
        }}
      >
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>
          What we can build for you
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem"
          }}
        >
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: 10,
              padding: "1.2rem"
            }}
          >
            <h3>React product frontends</h3>
            <p style={{ fontSize: "0.95rem" }}>
              Marketing sites, dashboards, CRMs and portals built with modern
              React tooling.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #eee",
              borderRadius: 10,
              padding: "1.2rem"
            }}
          >
            <h3>AI agents & chatbots</h3>
            <p style={{ fontSize: "0.95rem" }}>
              Custom AI flows on your data: support, lead qualification,
              internal copilots, and more.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #eee",
              borderRadius: 10,
              padding: "1.2rem"
            }}
          >
            <h3>Automation & integrations</h3>
            <p style={{ fontSize: "0.95rem" }}>
              Glue between tools – WhatsApp, email, CRMs, payment gateways,
              internal APIs.
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section
        id="why"
        style={{
          padding: "2rem 2rem 3rem",
          maxWidth: 1080,
          margin: "0 auto",
          borderTop: "1px solid #f0f0f0"
        }}
      >
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          Why teams work with Whizzystack
        </h2>
        <ul
          style={{
            paddingLeft: "1.1rem",
            lineHeight: 1.7,
            maxWidth: 720,
            fontSize: "0.95rem"
          }}
        >
          <li>We’re engineers first – not just slide decks.</li>
          <li>Small, focused team that ships fast with you in the loop.</li>
          <li>Comfortable with both greenfield builds and messy legacy stacks.</li>
        </ul>
      </section>ßßß

      {/* Contact / lead form */}
      <section
        id="contact"
        style={{
          padding: "2rem 2rem 3rem",
          maxWidth: 800,
          margin: "0 auto",
          borderTop: "1px solid #f0f0f0"
        }}
      >
        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          Tell us what you want to build
        </h2>
        <p style={{ marginBottom: "1.5rem", fontSize: "0.95rem" }}>
          A few lines about your product, current stack and timeline are enough.
          We’ll get back with a clear next step.
        </p>

        <ContactForm />
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "1rem 2rem",
          borderTop: "1px solid #eee",
          fontSize: "0.8rem",
          color: "#666",
          textAlign: "center"
        }}
      >
        © {new Date().getFullYear()} Whizzystack. Built with React & Firebase.
      </footer>
    </div>
  );
}

export default App;
