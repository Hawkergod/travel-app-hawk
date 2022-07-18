import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Layout } from "layouts/layout";
import { MainPage } from "pages/mainPage";
import { TripPage } from "pages/tripPage";
import { BookingsPage } from "pages/bookingsPage";
import { SignInPage } from "pages/signInPage";
import { SignUpPage } from "pages/signUpPage";
import PublicRoute from "./helpers/pablicRoute";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout isLogin={isLogin} setIsLogin={setIsLogin} />}
      >
        {/* <Route index element={<MainPage />} /> */}
        <Route
          index
          element={
            <PublicRoute
              component={<MainPage />}
              isLogin={isLogin}
              redirectTo={isLogin ? "/" : "/sign-in"}
            />
          }
        />
        <Route
          path="sign-up"
          element={<SignUpPage setIsLogin={setIsLogin} />}
        />
        <Route
          path="sign-in"
          element={<SignInPage setIsLogin={setIsLogin} />}
        />

        <Route path="trip/:tripId" element={<TripPage />} />
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
