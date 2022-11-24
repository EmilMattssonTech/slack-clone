import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Messages from "./components/Messages/Messages";
import WriteMessage from "./components/WriteMessage/WriteMessage";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      {/* <main className="main-container">
        <Sidebar />
        <div className="discussion">
          <Messages />
          <WriteMessage />
        </div>
      </main> */}
      <Login />
    </div>
  );
}

export default App;
