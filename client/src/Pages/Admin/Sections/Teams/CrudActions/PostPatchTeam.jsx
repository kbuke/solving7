export function PostPatchTeam({
    patchOrPost,
    allTeams,
    setTeamAction,
    handleTeamPost,
    handleTeamPatch,
    handleSubmit,
    inputConatiner,
    register,
    errors,
    team
}){
    const patchValue = (defaultValue) => {
        patchOrPost === "patch"
            ? defaultValue : null
    }

    return(
        <form 
            className="admin-form popup-form"
            onSubmit={handleSubmit(patchOrPost === "patch"
                ? handleTeamPatch
                : handleTeamPost
            )}
        >
            {
                patchOrPost === "patch"
                    ? <h1>Edit Team</h1>
                    : <h1>Add New Team</h1>
            }

            {
                inputConatiner(
                    "Please enter team name", "text",
                    "Please enter team name", {...register(
                        "teamName", {
                            required: "Please enter a team name",
                            validate: value => {
                                const exists = allTeams?.some(
                                    team => 
                                        team?.name.toLowerCase() === value?.toLowerCase()
                                )
                                return !exists || `${value} is an already registered team.`
                            }
                        }
                    )},
                    errors["teamName"]?.message,
                    patchValue(team?.name)
                )
            }

            {
                inputConatiner(
                    "Please enter team intro", "textarea",
                    "Please enter team intro", {...register(
                        "teamIntro", {
                            required: "Please enter a brief intro of the team"
                        }
                    )},
                    errors["teamIntro"]?.message,
                    patchValue(team?.intro)
                )
            }

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Submit
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => setTeamAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}