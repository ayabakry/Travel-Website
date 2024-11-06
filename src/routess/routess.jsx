import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Travelcard from "../Travel-User/Components/Travelcard";
import TripDetails from "../Travel-User/Pages/TripDetails";
import PaymwntPage from "../Travel-User/Pages/PaymentPage";
import SignIn from "../Travel-Admin/PagesAdmin/SignIn";
import Sidebar from "../Travel-Admin/ComponentAdmin/Sidebar";
import AddTravel from "../Travel-Admin/PagesAdmin/AddTravel";
import Paymentadmin from "../Travel-Admin/PagesAdmin/PaymentAdmin";
import TravelersData from "../Travel-Admin/PagesAdmin/TravelersData";
import ControlTravel from "../Travel-Admin/PagesAdmin/ControlTravel";

// import { Provider } from "react-redux";
// import store from "../Components/ReduxStore";

function routes() {
  return (
    // <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/:lang?/" element={<Travelcard />} />
        <Route path="/:lang?/sign-in" element={<SignIn />} />
        <Route
          path="/:lang?/trip-details"
          element={<TripDetails totalSeats={14} />}
        />
        <Route path="/:lang?/payment" element={<PaymwntPage />} />
        <Route path="/:lang?/add-travel" element={<AddTravel />} />
        <Route path="/:lang?/payment-admin" element={<Paymentadmin />} />
        <Route path="/:lang?/travelers-data" element={<TravelersData />} />
        <Route path="/:lang?/control-travel" element={<ControlTravel />} />
      </Routes>
    </Router>
    // </Provider>
  );
}

export default routes;
