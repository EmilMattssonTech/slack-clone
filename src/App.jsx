import "./App.css";
import Sidebar from "./assets/Sidebar";
import Messages from "./Messages";
import WriteMessage from "./WriteMessage";

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
