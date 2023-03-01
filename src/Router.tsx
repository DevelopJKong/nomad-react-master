import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/coin-project/:coinId'>
          <Coin />
        </Route>
        <Route path='/coin-project/'>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
