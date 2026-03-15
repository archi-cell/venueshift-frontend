import { useEffect, useState } from "react"
import API from "../services/api"
import Navbar from "../components/Navbar"
import "../styles/events.css";

function Events() {

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

            <div className="container">

                <h2>Events</h2>

                {events.map(event => (
                    <div className="card" key={event._id}>

                        <h3>{event.name}</h3>

                        <p>{event.category}</p>

                        <p>{event.date} - {event.day}</p>

                    </div>
                ))}

            </div>

        </>

    )

}

export default Events