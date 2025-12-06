export default function HomePage() {
  return (
    <div style={{ padding: "3rem 2rem" }}>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>
        Ship real products with React, AI & automation.
      </h1>
      <p style={{ maxWidth: 640, marginBottom: "2rem" }}>
        Whizzystack builds modern web apps, mobile apps and AI workflows for
        teams that want outcomes, not experiments.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div
          style={{
            flex: "1 1 220px",
            border: "1px solid #eee",
            borderRadius: 8,
            padding: "1rem"
          }}
        >
          <h3>React/Web Apps</h3>
          <p>High-performance frontends for SaaS, dashboards and portals.</p>
        </div>
        <div
          style={{
            flex: "1 1 220px",
            border: "1px solid #eee",
            borderRadius: 8,
            padding: "1rem"
          }}
        >
          <h3>AI Agents & Chatbots</h3>
          <p>Custom agents on top of your data: support, sales and workflows.</p>
        </div>
        <div
          style={{
            flex: "1 1 220px",
            border: "1px solid #eee",
            borderRadius: 8,
            padding: "1rem"
          }}
        >
          <h3>Automation</h3>
          <p>WhatsApp, email, CRM and backend automation that saves hours.</p>
        </div>
      </div>
    </div>
  );
}
