import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/Hero";
import About from "./components/About";
import './App.css';
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/marketplace" element={<MarketPlace />} />
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
      <Route path="paymentschedule" element={<PaymentSchedule />} />  */}
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
