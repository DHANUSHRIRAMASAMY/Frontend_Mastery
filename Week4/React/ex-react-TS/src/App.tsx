import Header from "./component/Header";
import StudentCard from "./component/StudentCard";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />

      <StudentCard
        name="Dhanushri"
        age={20}
        course="Information Technology"
      />

      <StudentCard
        name="Rahul"
        age={21}
        course="Computer Science"
      />

      <StudentCard
        name="Priya"
        age={19}
        course="Artificial Intelligence"
      />

      <Footer />
    </>
  );
}

export default App;