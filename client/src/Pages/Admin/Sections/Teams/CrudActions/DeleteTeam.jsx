import { useDelete } from "../../../../../Requests/useDelete"

export function DeleteTeam({
    deletePatchTeam,
    handleSubmit
}){
    const handleDeleteTeam = () => {
        useDelete(
            `/api/teams/${deletePatchTeam?.selectedTeamId}`,
            deletePatchTeam.setAllTeams,
            deletePatchTeam.selectedTeamId,
            deletePatchTeam.setTeamAction
        )
    }

    return(
        <form
            onSubmit={handleSubmit(handleDeleteTeam)}
            className="admin-form popup-form"
        >
            <h1>
                Confirm Deletion of Team: {deletePatchTeam.selectedTeamName}
            </h1>

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Delete
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => setTeamAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}