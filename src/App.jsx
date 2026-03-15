import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Events from "./pages/Events"
import Staff from "./pages/Staff"
import Schedule from "./pages/Schedule"
import Notifications from "./pages/Notifications"
import CreateEvent from "./pages/CreateEvent"

import "./styles/theme.css"


/* ================================
   PROTECTED ROUTE
================================ */
const PrivateRoute = ({ children }) => {

    const token = localStorage.getItem("token")

    if (!token) {
        return <Navigate to="/login" />
    }

    return children
}


/* ================================
   ADMIN ROUTE
================================ */
const AdminRoute = ({ children }) => {

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if (!token) {
        return <Navigate to="/login" />
    }

    if (role !== "admin") {
        return <Navigate to="/events" />
    }

    return children
}


function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* HOME */}

                <Route path="/" element={<Home />} />

                {/* AUTH */}

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />


                {/* PROTECTED ROUTES */}

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/events"
                    element={
                        <PrivateRoute>
                            <Events />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/staff"
                    element={
                        <PrivateRoute>
                            <Staff />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/schedule"
                    element={
                        <PrivateRoute>
                            <Schedule />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/notifications"
                    element={
                        <PrivateRoute>
                            <Notifications />
                        </PrivateRoute>
                    }
                />


                {/* ADMIN ROUTES */}

                <Route
                    path="/create-event"
                    element={
                        <AdminRoute>
                            <CreateEvent />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <Dashboard />
                        </AdminRoute>
                    }
                />


                {/* FALLBACK */}

                <Route path="*" element={<Navigate to="/" />} />

            </Routes>

        </BrowserRouter>

    )

}

export default App