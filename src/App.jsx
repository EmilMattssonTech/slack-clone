import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Messages from "./components/Messages/Messages";
import WriteMessage from "./components/WriteMessage/WriteMessage";

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <Sidebar />
        <div className="discussion">
          <Messages />
          <WriteMessage />
        </div>
      </main>
    </div>
  );
}

export default App;
