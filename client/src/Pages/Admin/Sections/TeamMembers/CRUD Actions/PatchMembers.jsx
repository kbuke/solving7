import { useEffect } from "react";
import { usePatch } from "../../../../../Requests/usePatch";
import { PostPatchInstance } from "../../../Components/PostPatchInstance";

import "./PatchMember.css"

export function PatchMembers({
    deletePatchMember,
    memberInputs,
    register,
    handleSubmit,
    reset,
    member,
    control,
    loggedUser
}){
    console.log(member)

    useEffect(() => {
        if(member){
            reset({
                name: member.name,
                img: member.img,
                position: member.position,
                intro: member.intro,
                email: member.email,
                teamId: member.team_id,
                userPassword: member.password_hash
            })
        }
    }, [member, reset])

    const handleMemberPatch = (formData) => {
        const patchData = {
            name: formData.name,
            img: formData.img,
            position: formData.position,
            intro: formData.intro,
            email: formData.email,
            teamId: formData.team_id,
            userPassword: formData.password_hash
        }

        usePatch(
            patchData,
            `/api/teammember/${deletePatchMember?.selectedMemberId}`,
            deletePatchMember?.selectedMemberId,
            deletePatchMember?.setAllTeamMembers,
            deletePatchMember?.setTeamMemberAction
        )
    }

    return(
        loggedUser?.id === deletePatchMember?.selectedMemberId
            ? <PostPatchInstance 
                patchOrPost={"patch"}
                handleInstancePatch={handleMemberPatch}
                handleSubmit={handleSubmit}
                inputArray={memberInputs}
                setInstanceAction={deletePatchMember?.setTeamMemberAction}
                reset={reset}
                register={register}
                control={control}
            />
            : <div className="unauthorized-popup">
                <h2>Unauthorized!</h2>

                <button 
                    className="close-unauthorized-button"
                    onClick={() => deletePatchMember?.setTeamMemberAction(null)}
                >
                    Close
                </button>
            </div>
    )
}