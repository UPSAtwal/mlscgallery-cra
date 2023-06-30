import './App.css';
import Gallery from "./pages/gallery/gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>

  );
}

export default App;
