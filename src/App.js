import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/whaleism"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jenny Lee
          </a>
          , on{" "}
          <a
            href="https://github.com/whaleism/jennys-react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          , hosted by{" "}
          <a
            href="https://jennys-react-dictionary-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
