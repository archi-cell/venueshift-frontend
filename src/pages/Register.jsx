import { useState } from "react"
import API from "../services/api"
import { useNavigate, Link } from "react-router-dom"
import "../styles/register.css"

function Register() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        await API.post("/auth/register", form)

        alert("Account Created Successfully")

        navigate("/login")
    }

    return (

        <div className="auth-page">

            <div className="auth-card">

                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        placeholder="Name"
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />

                    <input
                        placeholder="Email"
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />

                    <button type="submit">Create Account</button>

                </form>

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>

            </div>

        </div>

    )

}

export default Register