import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Travelcard from "../Components/Travelcard";

// import { Provider } from "react-redux";
// import store from "../Components/ReduxStore";

function routes() {
  return (
    // <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/:lang?/" element={<Travelcard />} />
          
        </Routes>
      </Router>
    // </Provider>
  );
}

export default routes;
