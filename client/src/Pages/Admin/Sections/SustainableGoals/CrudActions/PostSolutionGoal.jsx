import { useState } from "react";
import ReactSelect from "react-select"
import { usePost } from "../../../../../Requests/usePost";

export function PostSolutionGoal({
    allUNSustainableGoals,
    selectedSolutionId,
    allSustainableSolutions,
    setAllSustainableSolutions,
    setSolutionGoalAction,
    handleSubmit
}){
    const [sustainableId, setSustainableId] = useState()

    const availableGoals = allUNSustainableGoals.filter(goal => {
        const isAlreadyUsed = goal.solutions.some(s => s.id === selectedSolutionId);
        return !isAlreadyUsed; 
    });

    const renderOptions = availableGoals.map(goal => ({
        value: goal?.id,
        label: goal?.goal
    }))

    const handleSustainableSolutionPost = (formData) => {
        formData.solutionId = selectedSolutionId
        formData.sustainableId = sustainableId
        console.log(formData)
        usePost("/api/sustainablesolutions", formData, allSustainableSolutions, setAllSustainableSolutions, setSolutionGoalAction)
    }

    return(
        <form 
            className="admin-form popup-form"
            onSubmit={handleSubmit(handleSustainableSolutionPost)}
        >
            <h1>Add New UN Goal</h1>

            <ReactSelect 
                className="react-select"
                options={renderOptions}
                onChange={option => setSustainableId(option.value)}
                value={renderOptions.find(option => option.value === sustainableId) || null}
            />

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Submit
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => setSolutionGoalAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}