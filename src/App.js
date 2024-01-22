import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Searchlist from "./components/Searchlist";
import Filmlist from "./components/Filmlist";
import MoviePath from "./components/MoviePath";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  console.log(selectedId);

  return (
    <Router>
      <Header query={query} setQuery={setQuery} />
      <Routes>
        <Route
          path="/search"
          element={<Searchlist query={query} setSelectedId={setSelectedId} />}
        />
        <Route path="/" element={<Filmlist setSelectedId={setSelectedId} />} />
        <Route
          path="/details"
          element={<MoviePath selectedId={selectedId} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
