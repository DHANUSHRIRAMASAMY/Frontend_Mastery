type Student = {
  status: string;
};

type StatusProps = {
  students: Student[];
};

const styles: { [key: string]: React.CSSProperties } = {
  row: {
    display: "flex",
    gap: "16px",
    marginBottom: "28px",
    flexWrap: "wrap",
  },
  card: {
    flex: 1,
    minWidth: "130px",
    background: "#fff",
    borderRadius: "10px",
    padding: "18px 20px",
    textAlign: "center",
    boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
  },
  number: {
    fontSize: "30px",
    fontWeight: 700,
    color: "#1e3a5f",
  },
  label: {
    fontSize: "13px",
    color: "#6b7280",
    marginTop: "4px",
  },
};

function Status({ students }: StatusProps) {
  const total = students.length;
  const present = students.filter((s) => s.status === "Present").length;
  const absent = students.filter((s) => s.status === "Absent").length;

  return (
    <div style={styles.row}>
      <div style={styles.card}>
        <div style={styles.number}>{total}</div>
        <div style={styles.label}>Total Students</div>
      </div>
      <div style={styles.card}>
        <div style={{ ...styles.number, color: "#16a34a" }}>{present}</div>
        <div style={styles.label}>Present</div>
      </div>
      <div style={styles.card}>
        <div style={{ ...styles.number, color: "#dc2626" }}>{absent}</div>
        <div style={styles.label}>Absent</div>
      </div>
    </div>
  );
}

export default Status;
