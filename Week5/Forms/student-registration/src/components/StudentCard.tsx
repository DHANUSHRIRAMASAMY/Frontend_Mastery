import type { Student } from "../types/Student";

type Props = {
  student: Student;
};

function StudentCard({ student }: Props) {
  return (
    <div>
      <h3>{student.name}</h3>
      <p>Roll No: {student.rollNo}</p>
      <p>Department: {student.department}</p>
      <p>Year: {student.year}</p>
    </div>
  );
}

export default StudentCard;