import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await addDoc(collection(db, "leads"), {
        ...form,
        createdAt: serverTimestamp(),
        source: "react.whizzystack.co"
      });

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error saving lead:", err);
      setStatus("error");
    }
  };

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "2rem auto",
        border: "1px solid #ddd",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Contact us</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.75rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            padding: "0.6rem 1.2rem",
            cursor: status === "sending" ? "not-allowed" : "pointer"
          }}
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>

        {status === "success" && (
          <p style={{ color: "green", marginTop: "0.75rem" }}>
            Thanks! We’ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "red", marginTop: "0.75rem" }}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
