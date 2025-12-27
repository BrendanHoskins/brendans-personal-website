import React from "react";

function MoreAboutMeProfessionalPage() {
  return (
    <div style={styles.pageContainer}>
      <section style={styles.heroSection}>
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.subtitle}>
          Born in <strong>Hinsdale, Illinois</strong>. Grew up in{" "}
          <strong>Boulder, Colorado</strong>. Now based in the{" "}
          <strong>Greater Denver Area</strong>.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Beyond the keyboard</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🏋️</div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Weightlifting</h3>
              <p style={styles.cardText}>
                Training consistently keeps me disciplined and focused—habits
                that translate into my work.
              </p>
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🎾</div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Tennis & Golf</h3>
              <p style={styles.cardText}>
                Patience, strategy, and steady improvement are skills I practice
                on and off the court.
              </p>
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>♟️</div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Chess</h3>
              <p style={styles.cardText}>
                I love thinking a few moves ahead—great for systems design and
                feature planning.
              </p>
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🛠️</div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>DIY & Tech Projects</h3>
              <p style={styles.cardText}>
                Whether it’s a home project or a new tool, I enjoy building
                practical things that work well.
              </p>
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🎬</div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Movies & Reading</h3>
              <p style={styles.cardText}>
                Great stories and great ideas feed creativity and broaden
                perspective.
              </p>
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🍳</div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Cooking & Dining</h3>
              <p style={styles.cardText}>
                I love trying new restaurants and cuisines—exploration and
                curiosity are core to who I am.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoreAboutMeProfessionalPage;

const styles = {
  pageContainer: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "40px 20px 80px",
  },
  heroSection: {
    textAlign: "center",
    marginBottom: 24,
  },
  title: {
    margin: 0,
    fontSize: 36,
    lineHeight: 1.2,
    letterSpacing: 0.3,
  },
  subtitle: {
    margin: "10px 0 0",
    color: "#555",
    fontSize: 16,
  },
  section: {
    marginTop: 36,
  },
  sectionTitle: {
    margin: "0 0 12px",
    fontSize: 22,
    lineHeight: 1.3,
  },
  paragraph: {
    margin: 0,
    color: "#333",
    fontSize: 16,
    lineHeight: 1.7,
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
    marginTop: 8,
  },
  card: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    border: "1px solid #e6e6e6",
    borderRadius: 10,
    padding: 16,
    background: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    background: "#f6f7f9",
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    margin: "0 0 6px",
    fontSize: 16,
  },
  cardText: {
    margin: 0,
    color: "#444",
    fontSize: 14,
    lineHeight: 1.6,
  },
  pillList: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 0,
    margin: "8px 0 0",
    gap: 10,
  },
  pill: {
    padding: "8px 12px",
    borderRadius: 999,
    background: "#f0f2f5",
    fontSize: 13,
    color: "#333",
    border: "1px solid #e5e8ec",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 12,
    marginTop: 8,
  },
  imagePlaceholder: {
    height: 160,
    borderRadius: 12,
    border: "2px dashed #ced4da",
    background:
      "linear-gradient(135deg, rgba(246,247,249,0.9), rgba(238,240,243,0.9))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6c757d",
    textAlign: "center",
    padding: 12,
  },
  imageText: {
    fontSize: 14,
  },
  ctaSection: {
    marginTop: 48,
  },
  ctaCard: {
    borderRadius: 12,
    padding: 20,
    background:
      "linear-gradient(180deg, rgba(73, 133, 224, 0.10), rgba(73, 133, 224, 0.04))",
    border: "1px solid rgba(73,133,224,0.25)",
  },
  ctaTitle: {
    margin: "0 0 8px",
    fontSize: 18,
    lineHeight: 1.4,
  },
  ctaText: {
    margin: 0,
    color: "#2b2b2b",
    fontSize: 15,
    lineHeight: 1.7,
  },
};
