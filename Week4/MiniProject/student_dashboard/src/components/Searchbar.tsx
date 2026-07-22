type SearchbarProps = {
  query: string;
  onChange: (value: string) => void;
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    marginBottom: "24px",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    fontSize: "15px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    background: "#fff",
    outline: "none",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
};

function Searchbar({ query, onChange }: SearchbarProps) {
  return (
    <div style={styles.wrapper}>
      <input
        style={styles.input}
        type="text"
        placeholder="🔍  Search by student name..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
