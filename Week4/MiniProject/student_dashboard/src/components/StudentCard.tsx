type StudentProps = {
  name: string;
  department: string;
  year: number;
  status: string;
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "18px 22px",
    marginBottom: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
    flexWrap: "wrap",
    gap: "10px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  avatar: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "#1e3a5f",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "16px",
    flexShrink: 0,
  },
  name: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#111827",
  },
  meta: {
    fontSize: "13px",
    color: "#6b7280",
    marginTop: "2px",
  },
};

function StudentCard({ name, department, year, status }: StudentProps) {
  const isPresent = status === "Present";

  const badgeStyle: React.CSSProperties = {
    padding: "5px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: 600,
    background: isPresent ? "#dcfce7" : "#fee2e2",
    color: isPresent ? "#16a34a" : "#dc2626",
  };

  return (
    <div style={styles.card}>
      <div style={styles.left}>
        {/* Avatar shows first letter of name */}
        <div style={styles.avatar}>{name.charAt(0)}</div>
        <div>
          <div style={styles.name}>{name}</div>
          <div style={styles.meta}>{department} · Year {year}</div>
        </div>
      </div>
      <span style={badgeStyle}>{status}</span>
    </div>
  );
}

export default StudentCard;
