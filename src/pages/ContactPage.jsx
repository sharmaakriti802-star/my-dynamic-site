import ContactForm from "../ContactForm";

export default function ContactPage() {
  return (
    <div style={{ padding: "3rem 2rem" }}>
      <h1>Contact</h1>
      <p style={{ maxWidth: 640, marginBottom: "1.5rem" }}>
        Tell us briefly what you want to build. We’ll get back with a concrete
        angle, not just a discovery call.
      </p>
      <ContactForm />
    </div>
  );
}
