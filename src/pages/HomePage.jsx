import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function HomePage() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const ref = doc(db, "pages", "home");
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setContent(snap.data());
        }
      } catch (e) {
        console.error("Error loading home content", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return <div style={{ padding: "2rem" }}>Loading…</div>;
  }

  if (!content) {
    return (
      <div style={{ padding: "2rem" }}>
        No content found. Check Firestore `pages/home`.
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{content.headline}</h1>
      <p>{content.subheadline}</p>
    </div>
  );
}
