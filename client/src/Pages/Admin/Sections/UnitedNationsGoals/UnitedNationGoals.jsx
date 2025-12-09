import { useState } from "react";
import { GeneralLayout } from "../../Components/GeneralLayout";
import { PostUnGoal } from "./CrudActions/PostUnGoal";
import { PatchUnGoal } from "./CrudActions/PatchUnGoal";
import { DeleteUnGoal } from "./CrudActions/DeleteUnGoal";
import { useFetch } from "../../../../Requests/useFetch";

export function UnitedNationsGoals({
    appData,
    register,
    handleSubmit,
    errors,
    reset
}){
    const [unAction, setUnAction] = useState()
    const [selectedUnId, setSelectedUnId] = useState()
    const [selectedUnName, setSelectedUnName] = useState()
    const [unPostOrPatch, setUnPostOrPatch] = useState()

    const allUNSustainableGoals = appData?.allUNSustainableGoals
    const setAllUNSustainableGoals = appData?.setAllUNSustainableGoals

    const [unGoal, setUnGoal] = useState()
    
    useFetch(`/api/sustainabilities/${selectedUnId}`, setUnGoal, [selectedUnId, allUNSustainableGoals])

    const unHeadings = [
        {
            header: "Goal", accessor: "goal"
        },
        {
            header: "Goal-Info", accessor: "info"
        }
    ]

    const deletePatchUnGoals = {
        selectedUnId: selectedUnId,
        setSelectedUnId: setSelectedUnId,
        selectedUnName: selectedUnName,
        setSelectedUnName: setSelectedUnName,
        setUnAction: setUnAction,
        setAllUNSustainableGoals: setAllUNSustainableGoals
    }

    const unInputs = [
        {
           label: "Please enter UN Goal",
           type: "text",
           placeholder: "Please enter UN Goal",
           registerOptions: {
            required: "Please enter UN Goal",
            validate: value => {
                const exists = allUNSustainableGoals.some(
                    goal => 
                        goal.goal.toLowerCase === value?.toLowerCase() &&
                        goal.id != selectedUnId
                )
                return !exists || `${value} is already registered on the app`
            }
            },
            name: "sustainableGoal"
        },
        {
            label: "Please enter UN Info",
            type: "textarea",
            placeholder: "Please enter UN Info",
            registerOptions: {
                required: "Please enter info on UN Goal"
            },
            name: "sustainableInfo"
        },
        {
            label: "Please enter UN Goal Logo",
            type: "text",
            placeholder: "Please enter UN Goal Logo",
            registerOptions: {},
            name: "sustainableLogo"
        },
        {
            label: "Please enter UN Img",
            type: "text",
            placeholder: "Please enter UN Img",
            registerOptions: {},
            name: "sustainableImg"
        }
    ]

    return(
        <div>
            <GeneralLayout 
                title={"UN-Sustainable Goals"}
                tableHeadings={unHeadings}
                dataArray={allUNSustainableGoals}
                setTableAction={setUnAction}
                setSelectedCategoryId={setSelectedUnId}
                setSelectedCategoryName={setSelectedUnName}
                reset={reset}
                setPostOrPatch={setUnPostOrPatch}
            />

            {unAction 
                ? <div className="popup-container">
                    {unAction === "add"
                        ?<PostUnGoal 
                            handleSubmit={handleSubmit}
                            allUNSustainableGoals={allUNSustainableGoals}
                            setAllUNSustainableGoals={setAllUNSustainableGoals}
                            setUnAction={setUnAction}
                            unInputs={unInputs}
                            unAction={unAction}
                            reset={reset}
                            register={register}
                            errors={errors}
                        />
                        : unAction === "Edit"
                        ? <PatchUnGoal 
                            deletePatchUnGoals={deletePatchUnGoals}
                            unInputs={unInputs}
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            reset={reset}
                            unGoal={unGoal}
                        />
                        : <DeleteUnGoal 
                            deletePatchUnGoals={deletePatchUnGoals}
                            handleSubmit={handleSubmit}
                        />
                    }
                </div>
                : null
            }
        </div>
    )
}