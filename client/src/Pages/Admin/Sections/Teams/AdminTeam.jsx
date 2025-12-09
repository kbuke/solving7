import { useState } from "react"
import { GeneralLayout } from "../../Components/GeneralLayout"
import { PostTeam } from "./CrudActions/PostTeam"
import { PatchTeam } from "./CrudActions/PatchTeam"
import { DeleteTeam } from "./CrudActions/DeleteTeam"
import { useFetch } from "../../../../Requests/useFetch"

export function AdminTeam({
    appData,
    register,
    handleSubmit,
    errors,
    reset
}){
    const [teamAction, setTeamAction] = useState()
    const [selectedTeamId, setSelectedTeamId] = useState()
    const [selectedTeamName, setSelectedTeamName] = useState()
    const [teamPatchOrPost, setTeamPatchOrPost] = useState()
    const [team, setTeam] = useState()

    const allTeams = appData.allTeams
    const setAllTeams = appData.setAllTeams

    useFetch(`api/teams/${selectedTeamId}`, setTeam, [selectedTeamId, allTeams])

    const teamHeadings = [
        {
            header: "Team", accessor: "name"
        },
        {
            header: "Team-Intro", accessor: "intro"
        }
    ]

    const deletePatchTeam = {
        selectedTeamId: selectedTeamId,
        setSelectedTeamId: setSelectedTeamId,
        selectedTeamName: selectedTeamName,
        setSelectedTeamName: setSelectedTeamName,
        setTeamAction: setTeamAction,
        setAllTeams: setAllTeams
    }

    const teamInputs = [
        {
            label: "Please enter team name",
            type: "text",
            placeholder: "Please enter team name",
            registerOptions: {
                required: "Please enter team name",
                validate: value => {
                    const exists = allTeams?.some(
                        team =>
                            team.name.toLowerCase() === value?.toLowerCase() &&
                            team.id != selectedTeamId
                    )
                    return !exists || `${value} is already registered`
                }
            },
            name: "teamName"
        },
        {
            label: "Please enter team intro",
            type: "text",
            placeholder: "Please enter team intro",
            registerOptions: {
                required: "Please enter team intro",
            },
            name: "teamIntro"
        }
    ]

    return(
        <div>
            <GeneralLayout 
                title={"Teams"}
                tableHeadings={teamHeadings}
                dataArray={allTeams}
                setTableAction={setTeamAction}
                setSelectedCategoryId={setSelectedTeamId}
                setSelectedCategoryName={setSelectedTeamName}
                reset={reset}
                setPostOrPatch={setTeamPatchOrPost}
            />

            {teamAction
                ? <div className="popup-container">
                    {teamAction === "add"
                        ? <PostTeam 
                            handleSubmit={handleSubmit}
                            allTeams={allTeams}
                            setAllTeams={setAllTeams}
                            setTeamAction={setTeamAction}
                            teamInputs={teamInputs}
                            teamAction={teamAction}
                            reset={reset}
                            register={register}
                            errors={errors}
                        />
                        : teamAction === "Edit"
                        ? <PatchTeam 
                            deletePatchTeam={deletePatchTeam}
                            teamInputs={teamInputs}
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            reset={reset}
                            team={team}
                        />
                        : <DeleteTeam 
                            deletePatchTeam={deletePatchTeam}
                            handleSubmit={handleSubmit}
                        />
                    }
                </div>
                : null
            }
        </div>
    )
}