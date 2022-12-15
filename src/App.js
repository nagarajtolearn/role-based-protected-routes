import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Accounts from "./pages/Accounts";
import Admin from "./pages/Admin";
import Contacts from "./pages/Contacts";
import Manager from "./pages/Manager";

function App() {
  const role = "user";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route>
            {role === "accounts" && (
              <Route path="/accounts" element={<Accounts />} />
            )}
          </Route>
          <Route>
            {role === "manager" && (
              <Route path="/manager" element={<Manager />} />
            )}
          </Route>
          <Route>
            {role === "admin" && <Route path="/admin" element={<Admin />} />}
            {role === "admin" && (
              <Route path="/manager" element={<Manager />} />
            )}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
