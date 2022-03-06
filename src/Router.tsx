import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div>hi</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
