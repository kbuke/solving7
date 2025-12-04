import { useDelete } from "../../../../../Requests/useDelete"

export function DeleteUnGoal({
    deletePatchUnGoals,
    handleSubmit
}){
    const handleDeleteUnGoal = () => {
        useDelete(
            `/api/sustainabilities/${deletePatchUnGoals?.selectedUnId}`,
            deletePatchUnGoals.setAllUNSustainableGoals,
            deletePatchUnGoals.selectedUnId,
            deletePatchUnGoals.setUnAction
        )
    }

    return(
        <form
            onSubmit={handleSubmit(handleDeleteUnGoal)}
            className="admin-form popup-form"
        >
            <h1>
                Confirm Deletion of UN Goal: {deletePatchUnGoals?.selectedUnName}
            </h1>

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Delete
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => deletePatchUnGoals.setUnAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}