export function PostPatchUnGoal({
    patchOrPost,
    allUNSustainableGoals,
    setUnAction,
    handleUnPost,
    handleUnPatch,
    handleSubmit,
    inputConatiner,
    register,
    errors,
    unGoal
}){
    const patchValue = (defaultValue) => {
        patchOrPost === "patch"
            ? defaultValue : null
    }

    return(
        <form 
            className="admin-form popup-form"
            onSubmit={handleSubmit(patchOrPost === "patch"
                ? handleUnPatch
                : handleUnPost
            )}
        >
            {
                patchOrPost === "patch"
                    ? <h1>Edit Un Goal</h1>
                    : <h1>Add New UN Goal</h1>
            }

            {
                inputConatiner(
                    "Please enter UN Goal", "text",
                    "Please enter UN Goal", {...register(
                        "sustainableGoal", {
                            required: "Please enter a UN Goal",
                            validate: value => {
                                const exists = allUNSustainableGoals?.some(
                                    un => 
                                        un?.goal.toLowerCase() === value?.toLowerCase()
                                )
                                return !exists || `${value} is an already registered team.`
                            }
                        }
                    )},
                    errors["sustainableGoal"]?.message,
                    patchValue(unGoal?.goal)
                )
            }

            {
                inputConatiner(
                    "Please enter UN Goal info", "textarea",
                    "Please enter UN Goal info", {...register(
                        "sustainableInfo", {
                            required: "Please enter info on how S7 meets these goals"
                        }
                    )},
                    errors["sustainableInfo"]?.message,
                    patchValue(unGoal?.info)
                )
            }

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Submit
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => setUnAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}