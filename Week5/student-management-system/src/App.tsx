import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Stats from "./components/Stats";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />

      <SearchBar />

      <Stats />

      <StudentList />

      <Footer />
    </div>
  );
}

export default App;