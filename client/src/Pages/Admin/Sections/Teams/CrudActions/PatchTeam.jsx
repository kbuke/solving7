import { useEffect, useState } from "react";
import { useFetch } from "../../../../../Requests/useFetch";
import { usePatch } from "../../../../../Requests/usePatch"
import { PostPatchTeam } from "./PostPatchTeam";

export function PatchTeam({
    deletePatchTeam,
    inputContainer,
    register,
    handleSubmit, 
    errors,
    reset
}){
    const [team, setTeam] = useState()

    useFetch(`/api/teams/${deletePatchTeam?.selectedTeamId}`, setTeam)

    useEffect(() => {
        if(team){
            reset({
                teamName: team.name,
                teamIntro: team.intro
            })
        }
    }, [team, reset]) 

    const handleTeamPatch = (formData) => {
        const patchData = {
            teamName: formData.teamName,
            teamIntro: formData.teamIntro
        }
        usePatch(
            patchData, `/api/teams/${deletePatchTeam?.selectedTeamId}`,
            deletePatchTeam?.selectedTeamId, deletePatchTeam?.setAllTeams,
            deletePatchTeam?.setTeamAction
        )
    }

    return(
        <PostPatchTeam 
            patchOrPost={"patch"}
            allTeams={deletePatchTeam?.allTeams}
            setTeamAction={deletePatchTeam?.setTeamAction}
            handleTeamPatch={handleTeamPatch}
            handleSubmit={handleSubmit}
            inputConatiner={inputContainer}
            register={register}
            errors={errors}
            team={team}
        />
    )
}