import { useDelete } from "../../../../../Requests/useDelete"
import { DeleteInstance } from "../../../Components/DeleteInstance"

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
        <DeleteInstance 
            handleSubmit={handleSubmit}
            handleDeleteInstance={handleDeleteTeam}
            setModelAction={deletePatchTeam?.setTeamAction}
        />
    )
}