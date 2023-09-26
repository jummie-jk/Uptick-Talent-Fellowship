import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/Hero";
import './App.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeroSection />} />
      {/* <Route path="/intakes" />
      <Route path="/prospects" element={<Prospects />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/matterDetails" element={<MatterDetails />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/allProspects" element={<AllProspects />} />
      <Route path="summary" element={<Summary />} />
      <Route path="/crm" />
      <Route path="backOffice" />
      <Route path="helpDesktop" />
      <Route path="clientDetails" element={<ClientDetails />} />
      <Route path="terminationpolicy" element={<TerminationPolicy />} />
      <Route path="paymentschedule" element={<PaymentSchedule />} /> */}
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
