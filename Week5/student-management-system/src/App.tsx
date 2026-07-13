import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import Clock from "./components/Clock";
import Loading from "./components/Loading";

function App() {
  const [students, setStudents] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStudents(["Rahul", "Priya", "Arun", "Sneha"]);
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.title = `Students: ${students.length}`;
  }, [students]);

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header />

      <Clock />

      <SearchBar search={search} setSearch={setSearch} />

      {loading ? (
        <Loading />
      ) : (
        <StudentList students={filteredStudents} />
      )}
    </div>
  );
}

export default App;