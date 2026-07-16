import type { Student } from "../types/Student";
import StudentCard from "./StudentCard";

type Props = {
  students: Student[];
};

function StudentList({ students }: Props) {
  return (
    <div>
      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p>No students registered.</p>
      ) : (
        students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))
      )}
    </div>
  );
}

export default StudentList;