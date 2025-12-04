export function PostPatchProduct({
    patchOrPost,
    allProducts,
    setProductAction,
    handleProductPost,
    handleProductPatch,
    handleSubmit,
    inputContainer,
    register,
    errors,
    product,
    renderMissions,
    solutionId,
    setSolutionId
}){
    const patchValue = (defaultValue) => {
        patchOrPost === "patch"
            ? defaultValue : null
    }

    return(
        <form
            className="admin-form popup-form"
            onSubmit={handleSubmit(patchOrPost === "patch"
                ? handleProductPatch
                : handleProductPost
            )}
        >
            {
                patchOrPost === "patch"
                    ? <h1>Edit Product</h1>
                    : <h1>Add New Product</h1>
            }

            {
                inputContainer(
                    "Please enter product name", "text",
                    "Please enter product name", {...register(
                        "productName", {
                            required: "Please enter a solution",
                            validate: value => {
                                const exists = allProducts?.some(
                                    specificProduct => 
                                        specificProduct?.name.toLowerCase() === value?.toLowerCase()
                                )
                                return !exists || `${value} already registered product`
                            }
                        }
                    )},
                    errors["productName"]?.message,
                    patchValue(product?.name)
                )
            }

            {
                inputContainer(
                    "Please enter an image for product", "text",
                    "Please enter an image for product", {...register(
                        "productImg", {
                            required: "Please enter a image link"
                        }
                    )},
                    errors["productImg"]?.message,
                    patchValue(product?.img)
                )
            }

            {
                inputContainer(
                    "Please enter number built", "text",
                    "Please enter a number built", {...register(
                        "numberOfProduct", {
                            required: "Please enter a number"
                        }
                    )}, 
                    errors["numberOfProduct"]?.message,
                    patchValue(product?.no_made)
                )
            }

            {
                inputContainer(
                    "Please enter Mission", "select",
                    "Please enter Mission", solutionId,
                    null, renderMissions, setSolutionId, solutionId
                )
            }

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Submit
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => setProductAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}