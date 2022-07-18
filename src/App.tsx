import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { Layout } from "layouts/layout";
import { MainPage } from "pages/mainPage";
import { TripPage } from "pages/tripPage";
import { BookingsPage } from "pages/bookingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        {/* <Route path="sign-up" element={<SingUpPage/>}> */}
        {/* <Route path="sign-in" element={<SingIpPage/>}/> */}

        <Route path="trip/:tripId" element={<TripPage />} />
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
