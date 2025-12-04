import { usePost } from "../../../../Requests/usePost"
import { PostPatchProduct } from "./PostPatchProduct"

export function PostProduct({
    register,
    handleSubmit,
    errors,
    allProducts,
    setAllProducts,
    setProductAction,
    inputContainer,
    renderMissions,
    solutionId,
    setSolutionId
}){
    const handleProductPost = (formData) => {
        const finalData = {
            ...formData,
            solutionId: solutionId
        }
        console.log(finalData)
        usePost("/api/products", finalData, allProducts, setAllProducts, setProductAction)
    }

    return(
        <PostPatchProduct 
            patchOrPost={"post"}
            allProducts={allProducts}
            setProductAction={setProductAction}
            handleProductPost={handleProductPost}
            handleSubmit={handleSubmit}
            inputContainer={inputContainer}
            register={register}
            errors={errors}
            renderMissions={renderMissions}
            solutionId={solutionId}
            setSolutionId={setSolutionId}
        />
    )
}