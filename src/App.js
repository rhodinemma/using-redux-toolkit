import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CampaignListing from "./components/CampaignList";
import CampaignDetails from "./components/CampaignDetail";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container bg-white p-4 mt-5">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={CampaignListing} />
            <Route exact path="/campaigns/:campaignId" component={CampaignDetails} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
