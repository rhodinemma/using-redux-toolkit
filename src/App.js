import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CampaignListing from "./components/CampaignList";

function App() {
  return (
    <div className="App">
      <div className='container bg-white p-4 mt-5'>
        <h1 className="display-6">Campaign Listing</h1>
          <CampaignListing />
      </div>
    </div>
  );
}

export default App;
