import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";
import CoursePage from "./pages/coursePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
