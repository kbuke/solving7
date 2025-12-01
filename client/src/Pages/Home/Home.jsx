import { useOutletContext } from "react-router"
import homePgCover from "../../Resources/HomeImg.png"
import "./Home.css"
import { NavBar } from "./NavBar/NavBar"
import { HomeSections } from "./Sections/HomeSections"


export function Home(){
    const appData = useOutletContext()

    return(
        <div
            className="home-pg-container"
        >
            <NavBar 
                appData={appData}
            />

            <div
                className="home-pg-cover"
                style={{
                    backgroundImage: `url(${homePgCover})`
                }}
            >
             
            </div>

            <div
                className="pg-info-container"
            >
                <HomeSections 
                    appData={appData}
                />
            </div>
        </div>
    )
}