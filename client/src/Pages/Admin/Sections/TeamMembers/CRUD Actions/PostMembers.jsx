import { useEffect } from "react";
import { postData } from "../../../../../Requests/postData";
import { PostPatchInstance } from "../../../Components/PostPatchInstance";

export function PostMembers({
    handleSubmit,
    allMembers,
    setAllMembers,
    setMemberAction,
    memberInputs,
    memberAction,
    reset,
    register,
    errors,
    control,
    teamId
}){
    useEffect(() => {
        if(!memberAction) return;

        if(memberAction === "add") {
            reset({
                name: "",
                img: "",
                position: "",
                intro: "",
                email: "",
                teamId: "",
                userPassword: ""
            })
        }
    }, [memberAction])

    const handleMemberPost = (formData) => {
        const finalData = {
            ...formData,
            teamId: teamId
        }
        postData(
            "/api/teammember",
            finalData,
            allMembers,
            setAllMembers,
            setMemberAction
        )
    }

    return(
        <PostPatchInstance 
            patchOrPost={"post"}
            handleInstancePost={handleMemberPost}
            handleSubmit={handleSubmit}
            inputArray={memberInputs}
            setInstanceAction={setMemberAction}
            reset={reset}
            register={register}
            errors={errors}
            control={control}
        />
    )
}