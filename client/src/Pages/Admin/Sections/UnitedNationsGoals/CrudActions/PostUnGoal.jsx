import { usePost } from "../../../../../Requests/usePost"
import { PostPatchGoal } from "../../Goals/CrudActions/PostPatchGoal"
import { PostPatchUnGoal } from "./PostPatchUnGoal"

export function PostUnGoal({
    register,
    handleSubmit,
    errors,
    allUNSustainableGoals,
    setAllUNSustainableGoals,
    setUnAction,
    inputContainer
}){
    const handleUnPost = (formData) => {
        usePost("/api/sustainabilities", formData, allUNSustainableGoals, setAllUNSustainableGoals, setUnAction)
    }

    return(
        <PostPatchUnGoal 
            patchOrPost={"post"}
            allUNSustainableGoals={allUNSustainableGoals}
            setUnAction={setUnAction}
            handleUnPost={handleUnPost}
            handleSubmit={handleSubmit}
            inputConatiner={inputContainer}
            register={register}
            errors={errors}
        />
    )
}