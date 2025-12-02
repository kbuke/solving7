import { usePost } from "../../../../../Requests/usePost"
import { PostPatchGoal } from "./PostPatchGoal"

export function PostGoal({
    register,
    handleSubmit,
    errors,
    allSolutions,
    setAllSolutions,
    setSolutionAction,
    inputContainer,
}){
    const handleSolutionPost = (formData) => {
        usePost("/api/solutions", formData, allSolutions, setAllSolutions, setSolutionAction)
    }

    return(
        <PostPatchGoal 
            patchOrPost={"post"}
            allSolutions={allSolutions}
            setSolutionAction={setSolutionAction}
            handleSolutionPost={handleSolutionPost}
            handleSubmit={handleSubmit}
            inputContainer={inputContainer}
            register={register}
            errors={errors}
        />
    )
}