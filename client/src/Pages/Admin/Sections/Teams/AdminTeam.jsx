import { useState } from "react"
import { GeneralLayout } from "../../Components/GeneralLayout"
import { useForm } from "react-hook-form"
import { PostTeam } from "./CrudActions/PostTeam"
import { PatchTeam } from "./CrudActions/PatchTeam"
import { DeleteTeam } from "./CrudActions/DeleteTeam"

export function AdminTeam({
    appData
}){
    const [teamAction, setTeamAction] = useState()
    const [selectedTeamId, setSelectedTeamId] = useState()
    const [selectedTeamName, setSelectedTeamName] = useState()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const allTeams = appData.allTeams
    const setAllTeams = appData.setAllTeams

    console.log(allTeams)

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

    return(
        <div>
            <GeneralLayout 
                title={"Teams"}
                tableHeadings={teamHeadings}
                dataArray={allTeams}
                setTableAction={setTeamAction}
                setSelectedCategoryId={setSelectedTeamId}
                setSelectedCategoryName={setSelectedTeamName}
            />

            {teamAction
                ? <div className="popup-container">
                    {teamAction === "add"
                        ? <PostTeam 
                            register={register}
                            handleSubmmit={handleSubmit}
                            errors={errors}
                            allTeams={allTeams}
                            setAllTeams={setAllTeams}
                            setTeamAction={setTeamAction}
                            inputContainer={appData?.inputContainer}
                        />
                        : teamAction === "edit"
                        ? <PatchTeam />
                        : <DeleteTeam />
                    }
                </div>
                : null
            }
        </div>
    )
}