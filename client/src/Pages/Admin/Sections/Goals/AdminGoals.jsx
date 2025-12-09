import { useState } from "react"
import { GeneralLayout } from "../../Components/GeneralLayout"
import { PostGoal } from "./CrudActions/PostGoal"
import { PatchGoal } from "./CrudActions/PatchGoal"
import { DeleteTeam } from "../Teams/CrudActions/DeleteTeam"
import { DeleteGoal } from "./CrudActions/DeleteGoal"
import { useFetch } from "../../../../Requests/useFetch"

export function AdminGoals({
    appData,
    register,
    handleSubmit,
    errors,
    reset
}){
    const [solutionAction, setSolutionAction] = useState()
    const [selectedSolutionId, setSelectedSolutionId] = useState()
    const [selectedSolutionName, setSelectedSolutionName] = useState()
    const [goalPatchOrPost, setGoalPatchOrPost] = useState()
    const [goal, setGoal] = useState()

    const allSolutions = appData.allSolutions
    const setAllSolutions = appData.setAllSolutions

    useFetch(`api/solutions/${selectedSolutionId}`, setGoal, [selectedSolutionId, allSolutions])

    const solutionHeadings = [
        {
            header: "Solution", accessor: "solution"
        },
        {
            header: "Intro", accessor: "intro"
        },
        {
            header: "Image", accessor: "img",
            render: (value) => <img src={value} alt="" width={80}/>
        }
    ]

    const deletePatchGoal = {
        selectedSolutionId: selectedSolutionId,
        setSelectedSolutionId: setSelectedSolutionId,
        selectedSolutionName: selectedSolutionName,
        setSelectedSolutionName: setSelectedSolutionName,
        setSolutionAction: setSolutionAction,
        setAllSolutions: setAllSolutions
    }

    const solutionInputs = [
        {
            label: "Please enter solution",
            type: "text",
            placeholder: "Please enter solution",
            registerOptions: {
                required: "Please enter a solution",
                validate: value => {
                    const exists = allSolutions?.some(
                        solution => 
                            solution?.solution.toLowerCase() === value?.toLowerCase() &&
                            solution.id !== selectedSolutionId
                    )
                    return !exists || `${value} is already registered`
                }
            },
            name: "solution"
        },
        {
            label: "Please enter a description for the solution",
            type: "textarea",
            placeholder: "Please enter a description for the solution",
            registerOptions: {
                required: "Please enter a description"
            },
            name: "solutionIntro"
        },
        {
            label: "Please enter a image for the solution",
            type: "text",
            placeholder: "Please enter a image for the solution",
            registerOptions: {
                required: "Please enter link to an image"
            },
            name: "solutionImg"
        }
    ]

    return(
        <div>
            <GeneralLayout 
                title={"Goals"}
                tableHeadings={solutionHeadings}
                dataArray={allSolutions}
                setTableAction={setSolutionAction}
                setSelectedCategoryId={setSelectedSolutionId}
                setSelectedCategoryName={setSelectedSolutionName}
                reset={reset}
                setPostOrPatch={setGoalPatchOrPost}
            />

            {solutionAction
                ?<div className="popup-container">
                    {solutionAction === "add"
                        ? <PostGoal 
                            handleSubmit={handleSubmit}
                            allSolutions={allSolutions}
                            setAllSolutions={setAllSolutions}
                            setSolutionAction={setSolutionAction}
                            solutionInputs={solutionInputs}
                            solutionAction={solutionAction}
                            reset={reset}
                            register={register}
                            errors={errors}
                        />
                        : solutionAction === "Edit"
                        ? <PatchGoal 
                            deletePatchGoal={deletePatchGoal}
                            solutionInputs={solutionInputs}
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            reset={reset}
                            goal={goal}
                        />
                        :
                        <DeleteGoal 
                            deletePatchGoal={deletePatchGoal}
                            handleSubmit={handleSubmit}
                        />
                    }
                </div>
                :
                null
            }
        </div>
    )
}