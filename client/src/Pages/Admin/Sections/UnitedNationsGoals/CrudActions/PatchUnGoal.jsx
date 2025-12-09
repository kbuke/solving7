import { useEffect } from "react";
import { usePatch } from "../../../../../Requests/usePatch";
import { PostPatchInstance } from "../../../Components/PostPatchInstance";

export function PatchUnGoal({
    deletePatchUnGoals,
    unInputs,
    handleSubmit,
    reset,
    unGoal,
    register
}){
    useEffect(() => {
        if(unGoal){
            reset({
                sustainableGoal: unGoal.goal,
                sustainableLogo: unGoal.logo,
                sustainableImg: unGoal.img,
                sustainableInfo: unGoal.info
            })
        }
    }, [unGoal, reset])

    const handleUnPatch = (formData) => {
        const patchData = {
            sustainableGoal: formData.sustainableGoal,
            sustainableLogo: formData.sustainableLogo,
            sustainableImg: formData.sustainableImg,
            sustainableInfo: formData.sustainableInfo
        }
        usePatch(
            patchData, `/api/sustainabilities/${deletePatchUnGoals?.selectedUnId}`,
            deletePatchUnGoals?.selectedUnId, deletePatchUnGoals?.setAllUNSustainableGoals,
            deletePatchUnGoals?.setUnAction
        )
    }

    return(
        <PostPatchInstance 
            patchOrPost={"patch"}
            handleInstancePatch={handleUnPatch}
            handleSubmit={handleSubmit}
            inputArray={unInputs}
            setInstanceAction={deletePatchUnGoals?.setUnAction}
            reset={reset}
            register={register}
        />
    )
}