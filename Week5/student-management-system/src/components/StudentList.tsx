type Props = {
  students: string[];
};

function StudentList({ students }: Props) {
  return (
    <div>
      <h2>Students</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;