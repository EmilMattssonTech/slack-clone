import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Messages from "./components/Messages/Messages";
import WriteMessage from "./components/WriteMessage/WriteMessage";
import Login from "./components/Login/Login";
import { Link, Routes, Route } from "react-router-dom";
import Channel from "./components/Sidebar/Channel/Channel";

function Main() {
  return (
    <main className="main-container">
      <Sidebar />
      <div className="discussion">
        <Messages />
        <WriteMessage />
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to={"/main"}>Main</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/:id" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
