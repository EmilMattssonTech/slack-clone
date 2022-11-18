import "./App.css";
import Sidebar from "./assets/Sidebar";
import Messages from "./Messages";

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <Sidebar />
        <div>
          <Messages />
        </div>
      </main>
    </div>
  );
}

export default App;
