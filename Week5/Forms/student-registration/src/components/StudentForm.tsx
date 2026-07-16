import { useState } from "react";
import type { Student } from "../types/Student";

type Props = {
  onAddStudent: (student: Student) => void;
};

function StudentForm({ onAddStudent }: Props) {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !rollNo || !department || !year) {
      alert("Please fill all fields");
      return;
    }

    onAddStudent({
      name,
      rollNo,
      department,
      year,
    });

    setName("");
    setRollNo("");
    setDepartment("");
    setYear("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration Form</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Roll Number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">Select Year</option>
        <option>1st Year</option>
        <option>2nd Year</option>
        <option>3rd Year</option>
        <option>4th Year</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default StudentForm;