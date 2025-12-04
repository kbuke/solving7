import "./HomeSections.css"
import { MissionSection } from "./Specifics/MissionSection"
import { SustainabilityPopUp } from "./Specifics/SustainabilityPopUp"
import { SustainabilitySection } from "./Specifics/SustainabilitySection"
import { TeamSection } from "./Specifics/TeamSection"
import { useState } from "react"

export function HomeSections({
    appData
}){
    const [selectedSustainableGoal, setSelectedSustainableGoal] = useState()

    const allHomeSections = appData?.allHomeSections

    return(
        allHomeSections.map((section, index) => (
            <div key={index} className={`home-section ${section.accessor === "Team"? "team-section" : null}`}>
                <h1 className="section-heading">
                    {section?.heading}
                </h1>

                <p>{section?.text}</p>

                {
                    section?.accessor === "Mission"
                        ? <MissionSection 
                            appData={appData}
                        />
                        : section?.accessor === "Team"
                        ? <TeamSection 
                            appData={appData}
                        />
                        : section?.accessor === "Sustainability"
                        ? <SustainabilitySection 
                            appData={appData}
                            selectedSustainableGoal={selectedSustainableGoal}
                            setSelectedSustainableGoal={setSelectedSustainableGoal}
                        />
                        : null
                }

                {
                    selectedSustainableGoal
                        ? <div className="popup-container">
                            <SustainabilityPopUp 
                                selectedSustainableGoal={selectedSustainableGoal}
                                setSelectedSustainableGoal={setSelectedSustainableGoal}
                            />
                        </div>
                        : null
                }
            </div>
        ))
    )
}