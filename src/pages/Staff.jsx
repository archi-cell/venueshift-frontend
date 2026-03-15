import { useEffect, useState } from "react"
import API from "../services/api"
import Navbar from "../components/Navbar"
import "../styles/staff.css"

function Staff() {

    const [staff, setStaff] = useState([])

    useEffect(() => {

        async function load() {

            const res = await API.get("/staff")

            setStaff(res.data)

        }

        load()

    }, [])

    return (

        <>
            <Navbar />

            <div className="container">

                <h2>Staff</h2>

                {staff.map(member => (
                    <div className="card" key={member._id}>

                        <h3>{member.name}</h3>

                        <p>Event: {member.event}</p>

                    </div>
                ))}

            </div>

        </>

    )

}

export default Staff