import { useEffect, useState } from "react";
import { usePatch } from "../../../../../Requests/usePatch"
import { PostPatchInstance } from "../../../Components/PostPatchInstance";

export function PatchTeam({
    deletePatchTeam,
    handleSubmit,
    reset,
    teamInputs,
    team,
    register
}){

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
        <PostPatchInstance 
            patchOrPost={"patch"}
            handleInstancePatch={handleTeamPatch}
            handleSubmit={handleSubmit}
            inputArray={teamInputs}
            setInstanceAction={deletePatchTeam?.setTeamAction}
            reset={reset}
            register={register}
        />
    )
}