import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import TambahSoal from "./pages/TambahSoal.jsx";

import "./App.css";

const STORAGE_KEY = "edugame_soal";

function App() {
  const [soal, setSoal] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(soal));
    } catch {
      // Abaikan jika penyimpanan penuh atau diblokir
    }
  }, [soal]);

  const tambahSoal = (dataBaru) => {
    if (!dataBaru || !dataBaru.pertanyaan) return;
    setSoal((prev) => [...prev, dataBaru]);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <main className="main-content">
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard soal={soal} />} />
            <Route
              path="/tambah-soal"
              element={<TambahSoal tambahSoal={tambahSoal} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
