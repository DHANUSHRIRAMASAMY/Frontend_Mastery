const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    background: "#1e3a5f",
    color: "#fff",
    padding: "18px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: "0.5px",
  },
  badge: {
    background: "#3b82f6",
    color: "#fff",
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "20px",
  },
};

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <span style={styles.title}>🎓 Student Management Dashboard</span>
      <span style={styles.badge}>2026</span>
    </nav>
  );
}

export default Navbar;
