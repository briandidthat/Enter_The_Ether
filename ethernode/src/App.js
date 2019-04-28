import React, {useContext} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Product from "./views/Product";
import Contact from "./views/Contact";
import Layout from "./Layout";
import UserStore from "./Providers/UserState"

//layout function with incoming Components as the parameter
const withLayout = Component => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

const App = () => {
  return (  
    <UserStore>
      <Router>
        <Switch>
          <Route path="/" exact render={() => withLayout(Home)} />
          <Route path="/product" exact render={() => withLayout(Product)} />
          <Route path="/contact" exact render={() => withLayout(Contact)} />
        </Switch>
      </Router>
    </UserStore>
    )
}

export default App;
