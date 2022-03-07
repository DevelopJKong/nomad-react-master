import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/nomad-react-master">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
