import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Playlist from "./components/Playlist";
import Home from "./components/Home";
import Video from "./components/Video";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="bg-emerald-200 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="mx-auto py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/video/:id" element={<Video />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
