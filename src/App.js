import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateForm from "./pages/CreateForm";
import Details from "./pages/Details";
import EditForm from "./pages/EditForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="" exact element={<Home />} />
          <Route path="/create-challenge" exact element={<CreateForm />} />
          <Route path="/details/:id" exact element={<Details />} />
          <Route path="/edit/:id" exact element={<EditForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
