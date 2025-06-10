import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Navbar, ThemeSettings } from "./components";
import { Dashboard, Calendar, Kanban, BarChart } from "./pages";
import { useStateContext } from "./context/ContextProvider";
import './index.css';

function App() {
  const { activeMenu } = useStateContext();

  return (
    <BrowserRouter>
      <div className="flex relative">
        {activeMenu ? (
          <div className="w-64 fixed sidebar bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0">
            <Sidebar />
          </div>
        )}
        <div className={`min-h-screen w-full ${activeMenu ? 'ml-64' : 'flex-2'}`}>
          <div className="fixed md:static bg-main-bg navbar w-full">
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/bar" element={<BarChart />} />
            </Routes>
          </div>
        </div>
        <ThemeSettings />
      </div>
    </BrowserRouter>
  );
}

export default App;
