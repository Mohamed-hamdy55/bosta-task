// App.tsx
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { 
  Home,
  TrackingShipmentPage
} from "@routes/routes";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

const App: React.FC = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      currentLanguage === "en" ? "ltr" : "rtl"
    );
  }, [currentLanguage]);
  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* Start the routes for pages */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/tracking-shipments" element={<TrackingShipmentPage />}></Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
