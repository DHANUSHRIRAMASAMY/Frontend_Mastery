import StudentCard from "./StudentCard";

type Student = {
  id: number;
  name: string;
  department: string;
  year: number;
  status: string;
};

type StudentListProps = {
  students: Student[];
};

const styles: { [key: string]: React.CSSProperties } = {
  empty: {
    textAlign: "center",
    color: "#9ca3af",
    padding: "40px 0",
    fontSize: "15px",
  },
};

function StudentList({ students }: StudentListProps) {
  if (students.length === 0) {
    return <p style={styles.empty}>No students found.</p>;
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          department={student.department}
          year={student.year}
          status={student.status}
        />
      ))}
    </div>
  );
}

export default StudentList;
