import { useDelete } from "../../../../../Requests/useDelete"

export function DeleteGoal({
    deletePatchGoal,
    handleSubmit
}){
    const handleDeleteTeam = () => {
        useDelete(
            `/api/solutions/${deletePatchGoal?.selectedSolutionId}`,
            deletePatchGoal.setAllSolutions,
            deletePatchGoal.selectedSolutionId,
            deletePatchGoal.setSolutionAction
        )
    }

    return(
        <form
            className="admin-form popup-form"
            onSubmit={handleSubmit(handleDeleteTeam)}
        >
            <h1>
                Confirm Deletion of Solution: {deletePatchGoal.selectedSolutionName}
            </h1>

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Delete
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => deletePatchGoal.setSolutionAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}