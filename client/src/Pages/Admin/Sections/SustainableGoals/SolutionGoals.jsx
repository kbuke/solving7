import { useEffect, useState } from "react"
import { GeneralLayout } from "../../Components/GeneralLayout"
import { PostSolutionGoal } from "./CrudActions/PostSolutionGoal"
import { DeleteSolutionGoal } from "./CrudActions/DeleteSolutionGoal"

export function SolutionGoals({
    appData,
    register,
    handleSubmit,
    errors,
    reset,
    control
}){
    const [solutionGoalAction, setSolutionGoalAction] = useState()
    //This is the goals of S7
    const [goalId, setGoalId] = useState()
    const [sustainableId, setSustainableId] = useState()
    const [availableGoals, setAvailableGoals] = useState([])
    const [unSustainableGoalPostOrPatch, setUnSustainableGoalPostOrPatch] = useState()

    const sustainableGoalHeaders = [
        {
            header: "UN-Goal", accessor: "goal"
        }
    ]

    const allUNSustainableGoals= appData?.allUNSustainableGoals

    const allSustainableSolutions = appData?.allSustainableSolutions
    const setAllSustainableSolutions = appData?.setAllSustainableSolutions

    useEffect(() => (
        setAvailableGoals(
            allUNSustainableGoals.filter(
                unGoal => 
                    !unGoal.solutions.some(
                        solution => solution.id === goalId
                    )
            )
        )
    ), [allSustainableSolutions, goalId])

    const renderedUnOptions = [
        {
            label: "Please select UN Goal",
            type: "select",
            placeholder: "Please select UN Goal",
            registerOptions: {
                required: "Please select a UN Goal"
            },
            name: "sustainableId",
            renderedOptions: availableGoals?.map((goal) => ({
                value: goal?.id,
                label: goal?.goal
            })),
            setOptionId: setSustainableId,
            chosenId: sustainableId
        }
    ]

    return(
        <>
            <GeneralLayout 
                title={"UN Goals Achieved"}
                tableHeadings={sustainableGoalHeaders}
                dataArray={appData?.allSolutions}
                setTableAction={setSolutionGoalAction}
                goalRelation={"unSustainability"}
                goalDependant={true}
                allGoals={appData?.allSolutions}
                setSustainableId={setSustainableId}
                setGoalId={setGoalId}
                reset={reset}
                setPostOrPatch={setUnSustainableGoalPostOrPatch}
                goalId={goalId}
                sustainableId={sustainableId}
            />

            {
                solutionGoalAction
                    ? <div className="popup-container">
                        {
                            solutionGoalAction === "add"
                                ? <PostSolutionGoal 
                                    handleSubmit={handleSubmit}
                                    allSustainableSolutions={allSustainableSolutions}
                                    setAllSustainableSolutions={setAllSustainableSolutions}
                                    setSolutionGoalAction={setSolutionGoalAction}
                                    renderedUnOptions={renderedUnOptions}
                                    solutionGoalAction={solutionGoalAction}
                                    reset={reset}
                                    register={register}
                                    errors={errors}
                                    control={control}
                                    goalId={goalId}
                                    sustainableId={sustainableId}
                                />
                                : <DeleteSolutionGoal 
                                    goalId={goalId}
                                    sustainableId={sustainableId}
                                    setSolutionGoalAction={setSolutionGoalAction}
                                    handleSubmit={handleSubmit}
                                    allSustainableSolutions={allSustainableSolutions}
                                    setAllSustainableSolutions={setAllSustainableSolutions}
                                />

                        }
                    </div>
                    :
                    null
            }
        </>
    )
}