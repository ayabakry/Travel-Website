import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Travelcard from "../Components/Travelcard";
import TripDetails from "../Pages/TripDetails";
import PaymwntPage from "../Pages/PaymentPage";

// import { Provider } from "react-redux";
// import store from "../Components/ReduxStore";

function routes() {
  return (
    // <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/:lang?/" element={<Travelcard />} />
        <Route
          path="/:lang?/trip-details"
          element={<TripDetails totalSeats={14} />}
        />{" "}
        <Route path="/:lang?/payment" element={<PaymwntPage />} />
      </Routes>
    </Router>
    // </Provider>
  );
}

export default routes;
