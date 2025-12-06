export default function ServicesPage() {
  return (
    <div style={{ padding: "3rem 2rem" }}>
      <h1>Services</h1>
      <p style={{ maxWidth: 640, marginBottom: "2rem" }}>
        We focus on a tight core: React engineering plus AI + automation
        stacked on top of your existing tools.
      </p>

      <ul style={{ lineHeight: 1.8 }}>
        <li>React / Next.js frontends for SaaS and internal tools</li>
        <li>AI chatbots and support agents (web + WhatsApp)</li>
        <li>Workflow automation (integrations, webhooks, CRMs)</li>
        <li>Analytics dashboards and lightweight admin panels</li>
      </ul>
    </div>
  );
}
