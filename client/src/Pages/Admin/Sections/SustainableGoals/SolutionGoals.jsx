import { useState } from "react"
import { GeneralLayout } from "../../Components/GeneralLayout"
import { PostSolutionGoal } from "./CrudActions/PostSolutionGoal"
import { DeleteSolutionGoal } from "./CrudActions/DeleteSolutionGoal"

export function SolutionGoals({
    appData,
    register,
    handleSubmit,
    errors
}){
    const [solutionGoalAction, setSolutionGoalAction] = useState()
    const [selectedSolutionGoalId, setSelectedSolutionGoalId] = useState()
    const [selectedSolutionId, setSelectedSolutionId] = useState()

    const allSolutions = appData?.allSolutions

    const allUNSustainableGoals = appData?.allUNSustainableGoals
    const setAllUNSustainableGoals = appData?.setAllUNSustainableGoals

    const allSustainableSolutions = appData?.allSustainableSolutions
    const setAllSustainableSolutions = appData?.setAllSustainableSolutions

    const solutionGoalHeadings = [
        {
            header: "UN-Goal", accessor: "goal"
        }
    ]

    const solutionGoalArray = allSolutions.map((solution => {
        const solutionGoals = solution?.sustainable_goals
        return solutionGoals
    }))

    console.log(solutionGoalAction)

    return(
        <div>
            <GeneralLayout 
                title={"Solution - UN Goals"}
                tableHeadings={solutionGoalHeadings}
                dataArray={allSolutions}
                relational={true}
                dependantArray={solutionGoalArray}
                setOtherCategoryId={setSelectedSolutionId}
                setTableAction={setSolutionGoalAction}
            />

            {
                solutionGoalAction
                    ? <div className="popup-container">
                        {
                            solutionGoalAction === "add"
                                ? <PostSolutionGoal 
                                    allUNSustainableGoals={allUNSustainableGoals}
                                    selectedSolutionId={selectedSolutionId}
                                    allSustainableSolutions={allSustainableSolutions}
                                    setAllSustainableSolutions={setAllSustainableSolutions}
                                    setSolutionGoalAction={setSolutionGoalAction}
                                    handleSubmit={handleSubmit}
                                />
                                : <DeleteSolutionGoal />
                        }
                    </div>
                    : null
            }
       </div>
    )
}