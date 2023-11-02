import fullLogo from "./assets/full-logo.svg";
import "./App.css";

function App() {
  return (
    <main className="h-screen bg-purple-400 bg-graddient-to-r from-purple-600 via-pink-300 to-purple-600 flex flex-col items-center justify-center">
      <img src={fullLogo} />
      <div className="mt-4">
        <button className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-950 font-bold">
          Start Game
        </button>
      </div>
    </main>
  );
}

export default App;
