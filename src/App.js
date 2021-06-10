import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Word Finder</header>
        <h2>Which word are you looking up today?</h2>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This application is coded by Zoe Tucker 👩‍💻 <br />
            open-source on{" "}
            <a
              href="https://github.com/zoetucker/dictionary-app-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>
            and hosted by{" "}
            <a
              href="https://zen-hopper-05ef0e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
