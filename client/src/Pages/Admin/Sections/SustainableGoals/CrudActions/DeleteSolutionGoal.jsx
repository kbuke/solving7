import { useEffect, useState } from "react"
import { useDelete } from "../../../../../Requests/useDelete"
import { DeleteInstance } from "../../../Components/DeleteInstance"

export function DeleteSolutionGoal({
    goalId,
    sustainableId,
    setSolutionGoalAction,
    handleSubmit,
    allSustainableSolutions,
    setAllSustainableSolutions
}){
    const [sustainableSolutionId, setSustainableSolutionId] = useState()

    useEffect(() => (
        setSustainableSolutionId(allSustainableSolutions.filter(sustainableSolution => (
            sustainableSolution?.solution_id === goalId && sustainableSolution?.sustainable_id === sustainableId
        )))
    ), [])

    const handleDeleteUnS7Goal = (formData) => {
        useDelete(
            `/api/sustainablesolutions/${sustainableSolutionId[0]?.id}`,
            setAllSustainableSolutions, sustainableSolutionId[0]?.id,
            setSolutionGoalAction
        )
    }

    return(
        <DeleteInstance 
            handleSubmit={handleSubmit}
            handleDeleteInstance={handleDeleteUnS7Goal}
            setModelAction={setSolutionGoalAction}
        />
    )
}