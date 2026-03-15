import { useEffect, useState } from "react"
import API from "../services/api"
import Navbar from "../components/Navbar"
import "../styles/schedule.css"

function Schedule() {

    const [events, setEvents] = useState([])

    useEffect(() => {

        async function load() {

            const res = await API.get("/events")

            setEvents(res.data)

        }

        load()

    }, [])

    return (

        <>
            <Navbar />

            <div className="container schedule">

                <h2>Schedule</h2>

                {events.map(event => (
                    <div className="card" key={event._id}>

                        <h3>{event.name}</h3>

                        <p>{event.date} - {event.day}</p>

                    </div>
                ))}

            </div>

        </>

    )

}

export default Schedule