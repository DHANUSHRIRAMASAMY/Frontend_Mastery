import { useState } from "react";
import type { Student } from "./types/Student";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  function addStudent(student: Student) {
    setStudents([...students, student]);
  }

  return (
    <div>
      <StudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;