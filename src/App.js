import "./App.css";
import Header from "./components/Header";
import NotesList from "./pages/NotesList";
import NoteList from "./pages/NoteList";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={NotesList} />
          <Route path="/note/:id" component={NoteList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
