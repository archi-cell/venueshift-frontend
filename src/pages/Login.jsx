import { useState } from "react"
import API from "../services/api"
import { useNavigate, Link } from "react-router-dom"
import "../styles/login.css"

function Login() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")
        setLoading(true)

        try {

            const res = await API.post("/auth/login", form)

            localStorage.setItem("token", res.data.token)
            localStorage.setItem("role", res.data.role)

            if (res.data.role === "admin") {
                navigate("/dashboard")
            } else {
                navigate("/events")
            }

        } catch (err) {

            setError(
                err.response?.data?.message || "Login failed"
            )

        }

        setLoading(false)

    }

    return (

        <div className="auth-page">

            <div className="auth-card">

                <h2>Login</h2>

                {error && <p className="error">{error}</p>}

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />

                    <button type="submit" disabled={loading}>

                        {loading ? "Logging in..." : "Login"}

                    </button>

                </form>

                <p>
                    Don't have an account?{" "}
                    <Link to="/register">Create Account</Link>
                </p>

            </div>

        </div>

    )

}

export default Login