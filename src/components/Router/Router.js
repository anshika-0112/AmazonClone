import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Header/Navbar";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
