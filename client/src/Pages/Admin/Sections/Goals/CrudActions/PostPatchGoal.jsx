export function PostPatchGoal({
    patchOrPost,
    allSolutions,
    setSolutionAction,
    handleSolutionPost,
    handleSolutionPatch,
    handleSubmit,
    inputContainer,
    register,
    errors,
    solution
}){
    const patchValue = (defaultValue) => {
        patchOrPost === "patch"
            ? defaultValue : null
    }

    return(
        <form
            className="admin-form popup-form"
            onSubmit={handleSubmit(patchOrPost === "patch"
                ? handleSolutionPatch
                : handleSolutionPost
            )}
        >
            {
                patchOrPost === "patch"
                    ? <h1>Edit Solution</h1>
                    : <h1>Add New Solution</h1>
            }

            {
                inputContainer(
                    "Please enter solution", "text",
                    "Please enter solution", {...register(
                        "solution", {
                            required: "Please enter a solution",
                            validate: value => {
                                const exists = allSolutions?.some(
                                    solution => 
                                        solution?.solution.toLowerCase() === value?.toLowerCase()
                                )
                            }
                        }
                    )},
                    errors["solution"]?.message,
                    patchValue(solution?.solution)
                )
            }

            {
                inputContainer(
                    "Please enter a description for the solution", "textarea",
                    "Please enter a description for the solution", {...register(
                        "solutionIntro", {
                            required: "Please enter a description"
                        }
                    )},
                    errors["solutionIntro"]?.message,
                    patchValue(solution?.intro)
                )
            }

            {
                inputContainer(
                    "Please enter a image for solution", "text",
                    "Please enter a image for solution", {...register(
                        "solutionImg", {
                            required: "Please enter a image"
                        }
                    )}, 
                    errors["solutionImg"]?.message,
                    patchValue(solution?.img)
                )
            }

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Submit
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => setSolutionAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}