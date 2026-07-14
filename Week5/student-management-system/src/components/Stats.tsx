import { students } from "../data/students";

function Stats() {
  return (
    <div>
      <h3>Total Students : {students.length}</h3>
    </div>
  );
}

export default Stats;