import StudentCard from "./StudentCard";
import { students } from "../data/students";

function StudentList() {
  return (
    <>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}
    </>
  );
}

export default StudentList;