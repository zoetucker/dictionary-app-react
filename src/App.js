import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Word Finder</header>
        <h2>Which word are you looking for today?</h2>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This application is coded by Zoe Tucker <br />
            open-source on GitHub and hosted by Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
