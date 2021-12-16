import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Results from "./pages/Results";
import Description from "./pages/Description";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home setSearchValue={setSearchValue} />}
          ></Route>
          <Route
            path="/results"
            element={<Results searchValue={searchValue} />}
          ></Route>
          <Route path="/results/:id" element={<Description />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
