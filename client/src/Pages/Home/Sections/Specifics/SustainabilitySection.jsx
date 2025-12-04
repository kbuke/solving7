import { useEffect, useState } from "react"
import unLogo from "../../../../Resources/UN-Icon.png"
import "./SustainabilitySection.css"

export function SustainabilitySection({
    appData,
    selectedSustainableGoal,
    setSelectedSustainableGoal
}){
    const [goalsAchieved, setGoalsAchieved] = useState()
    

    console.log(selectedSustainableGoal)

    const allUNSustainableGoals = appData.allUNSustainableGoals

    useEffect(() => {
        const goals = allUNSustainableGoals.filter(goal => goal.solutions.length > 0)
        setGoalsAchieved(goals)
    }, [allUNSustainableGoals])

    const unGoalIcon = (number) => {
        return(
            `/UN-Logos/${number}/${number}.jpg`
        )
    }

    return(
        <div className="specific-container">
            <h3>
                Currently Solving7 meets {goalsAchieved?.length} of the 17 UN Sustainable goals
            </h3>
            <div className="un-wheel">
                <img 
                    className="un-icon"
                    alt="unIcon"
                    src={unLogo}
                />

                {allUNSustainableGoals.map((goal, index) => (
                    <div 
                        className={`slice ${goal?.solutions.length > 0 ? "impact-slice" : ""}`}
                        style={{ "--i": index }}
                        key={index}
                    >
                        <img 
                            src={unGoalIcon(goal?.id)}
                            // onClick={() => setSelectedSustainableGoal(goal)}
                            onClick={() => {
                                goal?.solutions.length > 0
                                    ? setSelectedSustainableGoal(goal)
                                    : null
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}