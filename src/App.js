import './App.css';
import ShowVehicles from "./pages/vehicles/vehicle-component";
import ShowHireDetails from "./pages/hireQuote/hire-component";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route exact path="/" component={ShowVehicles} />
          <Route exact path="/hire" component={ShowHireDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
