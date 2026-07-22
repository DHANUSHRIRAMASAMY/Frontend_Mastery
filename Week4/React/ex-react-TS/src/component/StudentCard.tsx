type StudentProps = {
  name: string;
  age: number;
  course: string;
};

function StudentCard({ name, age, course }: StudentProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age : {age}</p>
      <p>Course : {course}</p>
      <hr />
    </div>
  );
}

export default StudentCard;