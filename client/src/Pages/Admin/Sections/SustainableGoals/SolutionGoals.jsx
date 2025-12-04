import { useState } from "react"
import { GeneralLayout } from "../../Components/GeneralLayout"
import { PostSolutionGoal } from "./CrudActions/PostSolutionGoal"
import { DeleteSolutionGoal } from "./CrudActions/DeleteSolutionGoal"

export function SolutionGoals({
    appData,
    register,
    handleSubmit,
    errors,
    reset
}){
    const [solutionGoalAction, setSolutionGoalAction] = useState()
    //This is the goals of S7
    const [goalId, setGoalId] = useState()
    const [sustainableId, setSustainableId] = useState()

    const sustainableGoalHeaders = [
        {
            header: "UN-Goal", accessor: "goal"
        }
    ]

    const allUNSustainableGoals= appData?.allUNSustainableGoals

    const allSustainableSolutions = appData?.allSustainableSolutions
    const setAllSustainableSolutions = appData?.setAllSustainableSolutions

    return(
        <>
            <GeneralLayout 
                title={"UN Goals Achieved"}
                tableHeadings={sustainableGoalHeaders}
                dataArray={appData?.allSolutions}
                setTableAction={setSolutionGoalAction}
                goalRelation={"unSustainability"}
                goalDependant={true}
                allGoals={appData?.allSolutions}
                setSustainableId={setSustainableId}
                setGoalId={setGoalId}
                reset={reset}
            />

            {
                solutionGoalAction
                    ? <div className="popup-container">
                        {
                            solutionGoalAction === "add"
                                ? <PostSolutionGoal 
                                    allUNSustainableGoals={allUNSustainableGoals}
                                    selectedSolutionId={goalId}
                                    allSustainableSolutions={allSustainableSolutions}
                                    setAllSustainableSolutions={setAllSustainableSolutions}
                                    setSolutionGoalAction={setSolutionGoalAction}
                                    handleSubmit={handleSubmit}
                                    sustainableId={sustainableId}
                                    setSustainableId={setSustainableId}
                                />
                                : <DeleteSolutionGoal 
                                    goalId={goalId}
                                    sustainableId={sustainableId}
                                    setSolutionGoalAction={setSolutionGoalAction}
                                    handleSubmit={handleSubmit}
                                    allSustainableSolutions={allSustainableSolutions}
                                    setAllSustainableSolutions={setAllSustainableSolutions}
                                />

                        }
                    </div>
                    :
                    null
            }
        </>
    )
}