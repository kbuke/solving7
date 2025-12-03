import { useEffect, useState } from "react"
import { useDelete } from "../../../../../Requests/useDelete"

export function DeleteSolutionGoal({
    goalId,
    sustainableId,
    setSolutionGoalAction,
    handleSubmit,
    allSustainableSolutions,
    setAllSustainableSolutions
}){
    console.log(`solution: ${sustainableId} and goal: ${goalId}`)
    console.log(allSustainableSolutions)

    const [sustainableSolutionId, setSustainableSolutionId] = useState()

    useEffect(() => (
        setSustainableSolutionId(allSustainableSolutions.filter(sustainableSolution => (
            sustainableSolution?.solution_id === goalId && sustainableSolution?.sustainable_id === sustainableId
        )))
    ), [])

    const handleDeleteUnS7Goal = (formData) => {
        console.log(sustainableSolutionId)
        useDelete(
            `/api/sustainablesolutions/${sustainableSolutionId[0]?.id}`,
            setAllSustainableSolutions, sustainableSolutionId[0]?.id,
            setSolutionGoalAction
        )
    }

    return(
        <form
            className="admin-form popup-form"
            onSubmit={handleSubmit(handleDeleteUnS7Goal)}
        >
            <h1>Delete Relation?</h1>

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Submit
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => setSolutionGoalAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}