import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hello World!</h1>
        </header>
        <footer className="text-center">
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
            href="https://thriving-sunflower-684c9e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
