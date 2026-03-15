import { Link, useNavigate } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {

    const navigate = useNavigate()

    const role = localStorage.getItem("role")
    const token = localStorage.getItem("token")

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        navigate("/login")
    }

    return (

        <nav className="navbar">

            <div className="logo">
                Venue<em>Shift</em>
            </div>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/events">Events</Link>

                <Link to="/staff">Staff</Link>

                <Link to="/schedule">Schedule</Link>

                <Link to="/notifications">Alerts</Link>

                {/* ADMIN ONLY FEATURES */}
                {role === "admin" && (
                    <>
                        <Link to="/create-event">Create Event</Link>
                        <Link to="/admin">Admin Panel</Link>
                    </>
                )}

                {/* LOGIN / LOGOUT */}
                {token ? (

                    <button
                        className="logout"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                ) : (

                    <Link to="/login">Login</Link>

                )}

            </div>

        </nav>

    )
}

export default Navbar