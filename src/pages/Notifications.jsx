import { useEffect, useState } from "react"
import API from "../services/api"
import Navbar from "../components/Navbar"
import "../styles/notifications.css"

function Notifications() {

    const [notes, setNotes] = useState([])

    useEffect(() => {

        async function load() {

            const res = await API.get("/notifications")

            setNotes(res.data)

        }

        load()

    }, [])

    return (

        <>
            <Navbar />

            <div className="container notifications">

                <h2>Notifications</h2>

                {notes.map(note => (
                    <div className="card" key={note._id}>

                        <p>{note.message}</p>

                    </div>
                ))}

            </div>

        </>

    )

}

export default Notifications