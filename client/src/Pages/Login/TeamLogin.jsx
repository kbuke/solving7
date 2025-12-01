import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import backImg from "../../Resources/HomeImg.png"
import {useForm} from "react-hook-form"


import "./TeamLogin.css"

export function TeamLogin(){
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm()

    const appData = useOutletContext()

    const allTeamMembers = appData?.allTeamMembers

    const loginGrid = (label, type, setState, placeholder) => {
        return(
            <div className="login-grid">
                <label className="login-label">
                    {label}
                </label>

                <input 
                    type={type}
                    {...register(setState)}
                    placeholder={placeholder}
                    className="login-input"
                />
            </div>
        )
    }

    const handleLogin = async (formData) => {
        console.log(formData)
        setLoading(true)
        try{
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify(formData)
            })

            if (!res.ok){
                const err = await res.json()
                setError(err.error || "Login Failed")
                setLoading(false)
                return
            }

            const data = await res.json()
            
            navigate("/admin")
        } catch(err) {
            setError("Server unreachable. Make sure Flask is running on port 5555")
        } finally {
            setLoading(false)
        }
    }

    return(
        <form
            style={{backgroundImage: `url(${backImg})`}}
            className="login-form"
            onSubmit={handleSubmit(handleLogin)}
        >
            <div className="login-container">
                <h1 className="login-header">
                    Team-Login
                </h1>

                {loginGrid("Please enter Email Address", "text", "userEmail", "Please enter email")}
                {loginGrid("Please enter Password", "password", "userPassword", "Please enter password")}

                <button className="admin-login-button">
                    Login
                </button>
            </div>
        </form>
    )
}