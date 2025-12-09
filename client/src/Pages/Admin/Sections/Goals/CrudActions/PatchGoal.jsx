import { useEffect, useState } from "react";
import { useFetch } from "../../../../../Requests/useFetch";
import { usePatch } from "../../../../../Requests/usePatch";
import { PostPatchGoal } from "./PostPatchGoal";
import { PostPatchInstance } from "../../../Components/PostPatchInstance";

export function PatchGoal({
    deletePatchGoal,
    solutionInputs,
    register,
    handleSubmit,
    errors,
    reset,
    goal
}){

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
        <PostPatchInstance 
            patchOrPost={"patch"}
            handleInstancePatch={handleSolutionPatch}
            handleSubmit={handleSubmit}
            inputArray={solutionInputs}
            setInstanceAction={deletePatchGoal?.setSolutionAction}
            reset={reset}
            register={register}
        />
    )
}