import { useState } from "react";
import { GeneralLayout } from "../../Components/GeneralLayout";
import { PostUnGoal } from "./CrudActions/PostUnGoal";
import { PatchUnGoal } from "./CrudActions/PatchUnGoal";
import { DeleteUnGoal } from "./CrudActions/DeleteUnGoal";

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

    const allUNSustainableGoals = appData?.allUNSustainableGoals
    const setAllUNSustainableGoals = appData?.setAllUNSustainableGoals

    console.log(allUNSustainableGoals)

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

    return(
        <div>
            <GeneralLayout 
                title={"Un-Sustainable Goals"}
                tableHeadings={unHeadings}
                dataArray={allUNSustainableGoals}
                setTableAction={setUnAction}
                setSelectedCategoryId={setSelectedUnId}
                setSelectedCategoryName={setSelectedUnName}
                reset={reset}
            />

            {unAction 
                ? <div className="popup-container">
                    {unAction === "add"
                        ?<PostUnGoal 
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            allUNSustainableGoals={allUNSustainableGoals}
                            setAllUNSustainableGoals={setAllUNSustainableGoals}
                            setUnAction={setUnAction}
                            inputContainer={appData?.inputContainer}
                        />
                        : unAction === "Edit"
                        ? <PatchUnGoal />
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