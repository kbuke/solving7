import { useEffect, useState } from "react";
import { useFetch } from "../../../../../Requests/useFetch";
import { usePatch } from "../../../../../Requests/usePatch";
import { PostPatchGoal } from "./PostPatchGoal";

export function PatchGoal({
    deletePatchGoal,
    inputContainer,
    register,
    handleSubmit,
    errors,
    reset
}){
    const [goal, setGoal] = useState()

    useFetch(`/api/solutions/${deletePatchGoal?.selectedSolutionId}`, setGoal)

    useEffect(() => {
        if(goal){
            reset({
                solution: goal.solution,
                solutionIntro: goal.intro,
                solutionImg: goal.img
            })
        }
    }, [goal, reset])

    const handleSolutionPatch = (formData) => {
        const patchData = {
            solution: formData.solution,
            solutionIntro: formData.solutionIntro,
            solutionImg: formData.solutionImg
        }

        usePatch(
            patchData, `/api/solutions/${deletePatchGoal?.selectedSolutionId}`,
            deletePatchGoal?.selectedSolutionId, deletePatchGoal?.setAllSolutions,
            deletePatchGoal.setSolutionAction
        )
    }

    return(
        <PostPatchGoal 
            patchOrPost={"patch"}
            allSolutions={deletePatchGoal?.allSolutions}
            setSolutionAction={deletePatchGoal?.setSolutionAction}
            handleSolutionPatch={handleSolutionPatch}
            handleSubmit={handleSubmit}
            inputContainer={inputContainer}
            register={register}
            errors={errors}
            goal={goal}
        />
    )
}