import { Link } from "react-router"

import "./AdminNav.css"

import { useNavigate } from "react-router"

export function AdminNav({
    loggedUser,
    setLoggedUser
}){
    const navigate = useNavigate()

    const completeLogOut = () => {
        fetch("api/logout", {
            method: "DELETE"
        })
        .then(r => {
            if(r.ok){
                setLoggedUser(null)
            }
        })
        .then(navigate("/"))
    }

    return(
        <div className="admin-nav-bar">
            <img 
                className="logged-user-img"
                src={loggedUser?.img}
                alt={`${loggedUser?.name}-img`}
            />

            <Link
                to={"/"}
                className="admin-nav-button home-link"
            >
                Web Pg
            </Link>

            <button
                className="admin-nav-button"
                onClick={() => completeLogOut()}
            >
                Log-Out
            </button>
        </div>
    )
}