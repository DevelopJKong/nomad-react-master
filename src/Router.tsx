import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDoList from "./ToDoList";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <ToDoList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
