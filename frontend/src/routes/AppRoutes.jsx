import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import AddQuestion from "../pages/AddQuestion";

import DSA from "../pages/DSA";
import Arrays from "../pages/Arrays";
import Aptitude from "../pages/Aptitude";
import DBMS from "../pages/DBMS";
import OperatingSystem from "../pages/OperatingSystem";
import ComputerNetworks from "../pages/ComputerNetworks";
import CSFundamentals from "../pages/CSFundamentals";
import Companies from "../pages/Companies";
import Bookmarks from "../pages/Bookmarks";
import HR from "../pages/HR";
import NotFound from "../pages/NotFound";
import Strings from "../pages/Strings";
import Hashing from "../pages/Hashing";
import Quantitative from "../pages/Quantitative";
import TCS from "../pages/TCS";
import Logical from "../pages/Logical";
import HRAnswer from "../pages/HRAnswer";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dsa"
          element={
            <ProtectedRoute>
              <DSA />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dsa/arrays"
          element={
            <ProtectedRoute>
              <Arrays />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dsa/strings"
          element={
            <ProtectedRoute>
              <Strings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dsa/hashing"
          element={
            <ProtectedRoute>
              <Hashing />
            </ProtectedRoute>
          }
        />

        <Route
          path="/aptitude"
          element={
            <ProtectedRoute>
              <Aptitude />
            </ProtectedRoute>
          }
        />

        <Route
          path="/aptitude/quantitative"
          element={
            <ProtectedRoute>
              <Quantitative />
            </ProtectedRoute>
          }
        />

        <Route
          path="/aptitude/logical"
          element={
            <ProtectedRoute>
              <Logical />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cs-fundamentals"
          element={
            <ProtectedRoute>
              <CSFundamentals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cs-fundamentals/dbms"
          element={
            <ProtectedRoute>
              <DBMS />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cs-fundamentals/os"
          element={
            <ProtectedRoute>
              <OperatingSystem />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cs-fundamentals/cn"
          element={
            <ProtectedRoute>
              <ComputerNetworks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/companies"
          element={
            <ProtectedRoute>
              <Companies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/companies/tcs"
          element={
            <ProtectedRoute>
              <TCS />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <Bookmarks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hr"
          element={
            <ProtectedRoute>
              <HR />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hr/:id"
          element={
            <ProtectedRoute>
              <HRAnswer />
            </ProtectedRoute>
          }
        />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-question" element={<AddQuestion />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;