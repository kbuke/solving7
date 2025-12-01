import { usePost } from "../../../../../Requests/usePost"
import { PostPatchTeam } from "./PostPatchTeam"

export function PostTeam({
    register,
    handleSubmmit,
    errors, 
    allTeams, 
    setAllTeams, 
    setTeamAction,
    inputContainer
}){
    const handleTeamPost = (formData) => {
        usePost("/api/teams", formData, allTeams, setAllTeams, setTeamAction)
    }

    return(
        <PostPatchTeam 
            patchOrPost={"post"}
            allTeams={allTeams}
            setTeamAction={setTeamAction}
            handleTeamPost={handleTeamPost}
            handleSubmit={handleSubmmit}
            inputConatiner={inputContainer}
            register={register}
            errors={errors}
        />
    )   
}