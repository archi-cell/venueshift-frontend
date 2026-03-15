import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import API from "../services/api"
import "../styles/dashboard.css"

function Dashboard() {

    const navigate = useNavigate()

    const [staffCount, setStaffCount] = useState(0)
    const [eventCount, setEventCount] = useState(0)
    const [scheduleCount, setScheduleCount] = useState(0)

    useEffect(() => {

        async function fetchData() {

            try {

                const staffRes = await API.get("/staff")
                const eventRes = await API.get("/events")

                setStaffCount(staffRes.data.length)
                setEventCount(eventRes.data.length)

                /* Schedule count = number of events */
                setScheduleCount(eventRes.data.length)

            } catch (err) {
                console.log("Dashboard Error:", err)
            }

        }

        fetchData()

    }, [])

    return (

        <>
            <Navbar />

            <div className="dashboard-container">

                <h2>Admin Dashboard</h2>

                {/* DASHBOARD CARDS */}

                <div className="dashboard-cards">

                    <div className="card">
                        <h3>Total Staff</h3>
                        <p>{staffCount}</p>
                    </div>

                    <div className="card">
                        <h3>Upcoming Events</h3>
                        <p>{eventCount}</p>
                    </div>

                    <div className="card">
                        <h3>Schedules Created</h3>
                        <p>{scheduleCount}</p>
                    </div>

                </div>

                {/* QUICK ACTIONS */}

                <div className="dashboard-actions">

                    <h3>Quick Actions</h3>

                    <div className="action-btns">

                        <button
                            onClick={() => navigate("/create-event")}
                        >
                            Create Event
                        </button>

                        <button
                            onClick={() => navigate("/staff")}
                        >
                            View Staff
                        </button>

                        <button
                            onClick={() => navigate("/schedule")}
                        >
                            View Schedule
                        </button>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Dashboard