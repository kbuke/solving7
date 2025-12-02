import { useState } from "react"
import { GeneralLayout } from "../../Components/GeneralLayout"
import { PostGoal } from "./CrudActions/PostGoal"
import { PatchGoal } from "./CrudActions/PatchGoal"
import { DeleteTeam } from "../Teams/CrudActions/DeleteTeam"
import { DeleteGoal } from "./CrudActions/DeleteGoal"

export function AdminGoals({
    appData,
    register,
    handleSubmit,
    errors,
    reset
}){
    const [solutionAction, setSolutionAction] = useState()
    const [selectedSolutionId, setSelectedSolutionId] = useState()
    const [selectedSolutionName, setSelectedSolutionName] = useState()

    const allSolutions = appData.allSolutions
    const setAllSolutions = appData.setAllSolutions

    console.log(allSolutions)

    const solutionHeadings = [
        {
            header: "Solution", accessor: "solution"
        },
        {
            header: "Intro", accessor: "intro"
        },
        {
            header: "Image", accessor: "img",
            render: (value) => <img src={value} alt="" width={80}/>
        }
    ]

    const deletePatchGoal = {
        selectedSolutionId: selectedSolutionId,
        setSelectedSolutionId: setSelectedSolutionId,
        selectedSolutionName: selectedSolutionName,
        setSelectedSolutionName: setSelectedSolutionName,
        setSolutionAction: setSolutionAction,
        setAllSolutions: setAllSolutions
    }

    return(
        <div>
            <GeneralLayout 
                title={"Goals"}
                tableHeadings={solutionHeadings}
                dataArray={allSolutions}
                setTableAction={setSolutionAction}
                setSelectedCategoryId={setSelectedSolutionId}
                setSelectedCategoryName={setSelectedSolutionName}
            />

            {solutionAction
                ?<div className="popup-container">
                    {solutionAction === "add"
                        ? <PostGoal />
                        : solutionAction === "edit"
                        ? <PatchGoal />
                        :
                        <DeleteGoal 
                            deletePatchGoal={deletePatchGoal}
                            handleSubmit={handleSubmit}
                        />
                    }
                </div>
                :
                null
            }
        </div>
    )
}