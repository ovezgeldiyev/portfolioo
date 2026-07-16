import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Base/Header";
import Home from "./Home/Home";
import Footer from "./Base/Footer";
import LenisProvider from "./lenis-provider";
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <LenisProvider />
      <Header />
      <main className="main">
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}
