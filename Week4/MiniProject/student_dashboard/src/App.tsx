import { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Status from "./components/Status";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

// All student data lives here so every component can use it
const students = [
  { id: 1, name: "Dhanu", department: "IT", year: 3, status: "Present" },
  { id: 2, name: "Priya", department: "IT", year: 2, status: "Absent" },
  { id: 3, name: "Arun", department: "ECE", year: 4, status: "Present" },
];

function App() {
  const [query, setQuery] = useState("");

  // Filter students based on the search input
  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Searchbar query={query} onChange={setQuery} />
        <Status students={filtered} />
        <StudentList students={filtered} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
