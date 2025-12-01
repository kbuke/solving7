import { useOutletContext } from "react-router"
import { AdminNav } from "./Sections/AdminNav"
import { AdminTeam } from "./Sections/Teams/AdminTeam"

export function AdminPg(){
    const appData = useOutletContext()

    const loggedUser = appData?.loggedUser
    const setLoggedUser = appData?.setLoggedUser


    console.log(loggedUser)
    return(
        loggedUser
            ? <div>
                <AdminNav 
                    loggedUser={loggedUser}
                    setLoggedUser={setLoggedUser}
                />

                <AdminTeam 
                    appData={appData}
                />
            </div>
            :
            <h1>You're not allowed here</h1>
    )
}