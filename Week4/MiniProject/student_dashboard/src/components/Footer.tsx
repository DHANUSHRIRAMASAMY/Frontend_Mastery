const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    background: "#1e3a5f",
    color: "#94a3b8",
    textAlign: "center",
    padding: "16px",
    fontSize: "13px",
    marginTop: "auto",
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      © 2026 Student Management Dashboard. All rights reserved.
    </footer>
  );
}

export default Footer;
