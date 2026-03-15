import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import "../styles/home.css"

function Home() {

    const navigate = useNavigate()

    return (

        <div className="home-wrapper">

            <Navbar />

            <div className="home">

                <h1>Venue<span>Shift</span></h1>

                <p>Smart Staff Scheduling for Events</p>

                <div className="btn-row">

                    <button onClick={() => navigate("/login")}>
                        Login
                    </button>

                    <button onClick={() => navigate("/register")}>
                        Create Account
                    </button>

                </div>

            </div>

        </div>

    )

}

export default Home