import { useDeferredValue, useEffect, useState } from "react";
import { useFetch } from "../../../../../Requests/useFetch";
import { usePatch } from "../../../../../Requests/usePatch";
import { PostPatchGoal } from "../../Goals/CrudActions/PostPatchGoal";
import { PostPatchUnGoal } from "./PostPatchUnGoal";

export function PatchUnGoal({
    deletePatchUnGoals,
    inputContainer,
    register,
    handleSubmit,
    errors,
    reset,
}){
    const [unGoal, setUnGoal] = useState()

    useFetch(`/api/sustainabilities/${deletePatchUnGoals?.selectedUnId}`, setUnGoal)

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
        <PostPatchUnGoal 
            patchOrPost={"patch"}
            allUNSustainableGoals={deletePatchUnGoals?.allUNSustainableGoals}
            setSolutionAction={deletePatchUnGoals?.setSolutionAction}
            handleUnPatch={handleUnPatch}
            handleSubmit={handleSubmit}
            inputConatiner={inputContainer}
            register={register}
            errors={errors}
            unGoal={unGoal}
        />
    )
}