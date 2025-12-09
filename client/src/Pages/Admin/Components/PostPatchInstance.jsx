import { InputContainer } from "./InputContainer";

export function PostPatchInstance({
    patchOrPost,
    handleInstancePost,
    handleInstancePatch,
    handleSubmit,
    inputArray,
    setInstanceAction,
    reset,
    register,
    errors,
    control
}){
    return(
        <form
            className="admin-form popup-form"
            onSubmit={handleSubmit(patchOrPost === "patch"
                ? handleInstancePatch
                : handleInstancePost
            )}
        >
            {
                patchOrPost === "patch"
                    ? <h1>Edit Section</h1>
                    : <h1>Add Section</h1>
            }

            {inputArray.map(input => {
                return(
                    <InputContainer 
                        key={input.name}
                        label={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                        register={register(input.name, input.registerOptions)}
                        errorMessage={errors?.[input.name]?.message}
                        renderedOptions={input.renderedOptions}
                        setOptionId={input.setOptionId}
                        chosenId={input.chosenId}
                        control={control}
                        name={input.name}
                    />
                )})}

            <div className="form-button-container">
                <button type="submit" onClick={() => console.log("you are trying to submit")}>
                    Submit
                </button>

                <button onClick={() => {
                    setInstanceAction(null)
                    reset()
                }} type="button">
                    Cancel
                </button>
            </div>
        </form>
    )
}