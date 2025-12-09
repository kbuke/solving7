import { useState } from "react";
import { useFetch } from "../../../../Requests/useFetch";
import { GeneralLayout } from "../../Components/GeneralLayout";
import { PostMembers } from "./CRUD Actions/PostMembers";
import { PatchMembers } from "./CRUD Actions/PatchMembers";

export function AdminTeamMembers({
    appData,
    register,
    handleSubmit,
    errors,
    reset,
    control,
    loggedUser
}){
    const [teamMemberAction, setTeamMemberAction] = useState()
    const [selectedMemberId, setSelectedMemberId] = useState()
    const [selectedTeamMemberName, setSelectedTeamMemberName] = useState()
    const [memberPatchOrPost, setMemberPatchOrPost] = useState()
    const [member, setMember] = useState()
    const [teamId, setTeamId] = useState()

    const allTeamMembers = appData?.allTeamMembers
    const setAllTeamMembers = appData?.setAllTeamMembers

    const allTeams = appData?.allTeams

    console.log(allTeams)

    useFetch(`/api/teammember/${selectedMemberId}`, setMember, [selectedMemberId, allTeamMembers])

    const memberHeadings = [
        {
            header: "Name", accessor: "name"
        },
        {
            header: "Image", accessor: "img",
            render: (value) => <img src={value} alt="" width={80}/>
        },
        {
            header: "Position", accessor: "position"
        },
        {
            header: "Introduction", accessor: "intro"
        }
    ]

    const deletePatchMember = {
        selectedMemberId: selectedMemberId,
        setSelectedMemberId: setSelectedMemberId,
        selectedTeamMemberName: selectedTeamMemberName,
        setSelectedTeamMemberName: setSelectedTeamMemberName,
        setTeamMemberAction: setTeamMemberAction,
        setAllTeamMembers: setAllTeamMembers
    }

    const memberInputs = [
        {
            label: "Please enter members email address",
            type: "text",
            placeholder: "Please enter members email address",
            registerOptions: {
                required: "Please enter email address"
                //Make sure it ends in @solving7green.com
            },
            name: "email"
        },
        {
            label: "Please enter members password",
            type: "text", //change it to password soon
            placeholder: "Please enter members password",
            registerOptions: {
                required: "Please enter users new password"
            },
            name: "userPassword"
        },
        {
            label: "Please enter member name",
            type: "text",
            placeholder: "Please enter member name",
            registerOptions: {
                required: "Please enter team member name"
            },
            name: "name"
        },
        {
            label: "Please select team",
            type:"select",
            placeholder: "Please select team",
            registerOptions: {
                required: "Please select team"
            },
            name: "teamId",
            renderedOptions: allTeams?.map(team => ({
                value: team?.id,
                label: team?.name
            })),
            setOptionId: setTeamId,
            chosenId: teamId
        },
        {
            label: "Please enter member image",
            type: "text",
            placeholder: "Please enter member image",
            registerOptions: {
                required: "Please enter team member image"
            },
            name: "img"
        },
        {
            label: "Please enter members position",
            type: "text",
            placeholder: "Please enter members position",
            registerOptions: {
                required: "Please enter position"
            },
            name: "position"
        },
        {
            label: "Please enter members information.",
            type: "textarea",
            placeholder: "Please enter members information",
            registerOptions: {
                required: "Please enter member's information"
            },
            name: "intro"
        }
    ]

    return(
        <div>
            <GeneralLayout 
                title={"Team Members"}
                tableHeadings={memberHeadings}
                dataArray={allTeamMembers}
                setTableAction={setTeamMemberAction}
                setSelectedCategoryId={setSelectedMemberId}
                setSelectedCategoryName={setSelectedTeamMemberName}
                reset={reset}
                setPostOrPatch={setMemberPatchOrPost}
            />

            {teamMemberAction
                ? <div className="popup-container">
                    {teamMemberAction==="add"
                        ?<PostMembers 
                            handleSubmit={handleSubmit}
                            allMembers={allTeamMembers}
                            setAllMembers={setAllTeamMembers}
                            setMemberAction={setTeamMemberAction}
                            memberInputs={memberInputs}
                            memberAction={teamMemberAction}
                            reset={reset}
                            register={register}
                            errors={errors}
                            control={control}
                            teamId={teamId}
                        />
                        : teamMemberAction==="Edit"
                            ?<PatchMembers 
                                deletePatchMember={deletePatchMember}
                                memberInputs={memberInputs}
                                register={register}
                                handleSubmit={handleSubmit}
                                reset={reset}
                                member={member}
                                control={control}
                                loggedUser={loggedUser}
                            />
                            :null
                    }
                </div>
                : null
            }
        </div>
    )
}