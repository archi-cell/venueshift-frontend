import { useState } from "react"
import API from "../services/api"
import Navbar from "../components/Navbar"
import "../styles/createEvent.css"

function CreateEvent() {

    const [form, setForm] = useState({
        name: "",
        category: "",
        date: "",
        day: "",
        staff: ""
    })

    const handleSubmit = async (e) => {

        e.preventDefault()

        const staffArray = form.staff.split(",")

        await API.post("/events/create", {
            ...form,
            staff: staffArray
        })

        alert("Event Created")

    }

    return (

        <>
            <Navbar />

            <div className="container">

                <h2>Create Event</h2>

                <form onSubmit={handleSubmit} className="create-event-form">

                    <input
                        placeholder="Event Name"
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />

                    <input
                        placeholder="Category"
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                    />

                    <input
                        type="date"
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />

                    <input
                        placeholder="Day"
                        onChange={(e) => setForm({ ...form, day: e.target.value })}
                    />

                    <input
                        placeholder="Staff names (comma separated)"
                        onChange={(e) => setForm({ ...form, staff: e.target.value })}
                    />

                    <button>Create Event</button>

                </form>

            </div>

        </>

    )

}

export default CreateEvent
