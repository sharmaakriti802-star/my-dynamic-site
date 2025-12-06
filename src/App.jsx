import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="ws-page">
      {/* HEADER */}
      <header className="ws-header">
        <div className="ws-shell ws-header-inner">
          <div className="ws-logo">
            <span className="ws-logo-pill" />
            <span>Whizzystack</span>
          </div>
          <nav className="ws-nav">
            <a href="#services">Services</a>
            <a href="#why">Why us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="ws-section">
        <div className="ws-shell ws-hero-grid">
          <div>
            <div className="ws-badge">
              <span className="ws-badge-dot" />
              React • AI • Automation
            </div>

            <h1 className="ws-hero-title">
              Ship real products,
              <br />
              not just prototypes.
            </h1>

            <p className="ws-hero-sub">
              We help companies turn ideas into production-grade React apps,
              AI agents and automated workflows – with clear, measurable
              outcomes.
            </p>

            <ul className="ws-hero-bullets">
              <li>• React/Next.js frontends for SaaS, dashboards and portals</li>
              <li>• AI chatbots & assistants using your own data and tools</li>
              <li>• Integrations around CRMs, ERPs and internal APIs</li>
            </ul>

            <div>
              <a href="#contact" className="ws-cta-primary">
                Tell us what you want to build →
              </a>
              <a href="#services" className="ws-cta-secondary">
                Or review what we can deliver
              </a>
            </div>
          </div>

          {/* Hero side card with SVG */}
          <div className="ws-hero-card">
            <svg
              className="ws-hero-svg"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="ws-grad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#ws-grad)" />
            </svg>
            <h3 style={{ marginBottom: "0.4rem" }}>Snapshot: typical outcome</h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                color: "#e5e7eb",
                maxWidth: "16rem"
              }}
            >
              Cut manual ops by 30–40%, respond to leads in seconds instead of
              hours, and get real visibility with simple dashboards.
            </p>
            <div style={{ marginTop: "1.2rem", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Time-to-first-version</span>
                <span style={{ color: "#bbf7d0" }}>2–4 weeks</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Stack</span>
                <span>React, Node, Firebase, APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="ws-section">
        <div className="ws-shell">
          <h2 style={{ fontSize: "1.6rem", marginBottom: "1.2rem" }}>
            What we can build for you
          </h2>
          <p
            style={{
              maxWidth: "40rem",
              fontSize: "0.95rem",
              color: "#cbd5f5",
              marginBottom: "1.8rem"
            }}
          >
            We keep the service surface tight: React engineering plus AI and
            automation stacked on top of your existing tools, not random tech
            experiments.
          </p>

          <div className="ws-cards-grid">
            <div className="ws-card">
              <h3>React product frontends</h3>
              <p>
                Marketing sites, SaaS dashboards, admin panels and internal
                tools built with modern React/Next.js.
              </p>
            </div>
            <div className="ws-card">
              <h3>AI agents & chatbots</h3>
              <p>
                Support agents, sales assistants and internal copilots that sit
                on top of your data and workflows.
              </p>
            </div>
            <div className="ws-card">
              <h3>Automation & integrations</h3>
              <p>
                Glue between your stack: CRMs, WhatsApp, email, payments,
                custom APIs, webhooks and background jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US + CONTACT SIDE BY SIDE */}
      <section id="why" className="ws-section">
        <div className="ws-shell ws-two-col">
          <div>
            <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
              Why teams like working with us
            </h2>
            <ul
              style={{
                paddingLeft: "1.1rem",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                color: "#cbd5f5",
                maxWidth: "30rem"
              }}
            >
              <li>We’re engineers first – we actually ship, not just plan.</li>
              <li>
                Small, senior team: you talk to the people who build, not
                account layers.
              </li>
              <li>
                Comfortable building new products or wrapping structure around
                messy legacy systems.
              </li>
              <li>
                Focused on working software, clear outcomes and sensible
                timelines.
              </li>
            </ul>
          </div>

          {/* Contact section embedded here */}
          <div id="contact">
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>
              Tell us what you want to build
            </h2>
            <p className="ws-contact-intro">
              A few lines about your product, current stack and rough timeline
              are enough. We’ll come back with a concrete angle, not just a
              discovery call.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ws-footer">
        © {new Date().getFullYear()} Whizzystack. Built with React & Firebase.
      </footer>
    </div>
  );
}

export default App;
