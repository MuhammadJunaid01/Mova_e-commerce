import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
