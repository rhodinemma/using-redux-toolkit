import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/LandingPage/index";
import CampaignListing from "./components/CampaignListing/index";
import CampaignDetail from "./components/CampaignDetails/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tuyambe/progress" component={CampaignListing} />
          <Route
            exact
            path="/campaigns/:campaignId"
            component={CampaignDetail}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
