import Home from "./Components/HomePage/Home";
import LoginPage from "./Components/LoginPage/LoginPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserProfile from "./Components/UserProfile/UserProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
