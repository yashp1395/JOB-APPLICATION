import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import Referrals from "./pages/Referrals";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/jobs"
                    element={
                        <ProtectedRoute>
                            <Jobs />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/post-job"
                    element={
                        <ProtectedRoute>
                            <PostJob />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/referrals"
                    element={
                        <ProtectedRoute>
                            <Referrals />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;