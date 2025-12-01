import { useEffect, useState } from "react"
import "./NavBar.css"

export function NavBar({appData}){

    const allHomeSections = appData?.allHomeSections

    return(
        <div
            className="nav-bar-div"
        >
            {allHomeSections.map((section, index) => (
                <div
                    className="nav-container"
                    key={index}
                >
                    {section?.accessor}
                </div>
            ))}

        </div>
    )
}