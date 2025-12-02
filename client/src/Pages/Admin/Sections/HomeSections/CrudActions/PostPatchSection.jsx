export function PostPatchSection({
    patchOrPost,
    allSections,
    setSectionAction,
    handleSectionPost,
    handleSectionPatch,
    handleSubmit,
    inputContainer,
    register,
    errors,
    section
}){ 
    const patchValue = (defaultValue) => {
        patchOrPost === "patch"
            ? defaultValue : null
    }

    return(
        <form
            className="admin-form popup-form"
            onSubmit={handleSubmit(patchOrPost === "patch"
                ? handleSectionPatch
                : handleSectionPost
            )}
        >
            {
                patchOrPost === "patch"
                    ? <h1>Edit Section</h1>
                    : <h1>Add Section</h1>
            }

            {
                inputContainer(
                    "Please enter section title", "text",
                    "Please enter section title", {...register(
                        "heading", {
                            required: "Please enter a heading",
                            validate: value => {
                                const exists = allSections?.some(
                                    section => 
                                        section?.heading.toLowerCase() === value?.toLowerCase()
                                )
                                return !exists || `${value} is already registered on the app`
                            }
                        }
                    )},
                    errors["heading"]?.message,
                    patchValue(section?.heading)
                )
            }

            {
                inputContainer(
                    "Please enter section info", "textarea",
                    "Please enter section info", {...register(
                        "text", {
                            required: "Please enter some info"
                        }
                    )},
                    errors["text"]?.message,
                    patchValue(section?.text)
                )
            }

            {
                inputContainer(
                    "Please enter img-1", "text",
                    "Please enter img-1", {...register(
                        "img_1"
                    )},
                    null,
                    patchValue(section?.img_1)
                )
            }

            {
                inputContainer(
                    "Please enter img-2", "text",
                    "Please enter img-2", {...register(
                        "img_2"
                    )},
                    null,
                    patchValue(section?.img_2)
                )
            }

            {
                inputContainer(
                    "Please enter accessor-key", "text",
                    "Please enter accessor-key", {...register(
                        "accessor"
                    )},
                    null,
                    patchValue(section?.accessor)
                )
            }

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Submit
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => setSectionAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}