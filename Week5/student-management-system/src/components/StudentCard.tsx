import { Student } from "../types/Student";

type Props = {
  student: Student;
};

function StudentCard({ student }: Props) {
  return (
    <div className="card">
      <h2>{student.name}</h2>

      <p>Age: {student.age}</p>

      <p>Attendance: {student.attendance}%</p>

      <p>
        {student.passed ? "✅ Passed" : "❌ Failed"}
      </p>

      <p>
        {student.attendance >= 75
          ? "Eligible"
          : "Not Eligible"}
      </p>
    </div>
  );
}

export default StudentCard;