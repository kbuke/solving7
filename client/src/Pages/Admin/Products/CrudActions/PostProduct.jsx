import { usePost } from "../../../../Requests/usePost"
import { PostPatchProduct } from "./PostPatchProduct"

export function PostProduct({
    register,
    handleSubmit,
    errors,
    allProducts,
    setAllProducts,
    setProductAction,
    inputContainer
}){
    const handleProductPost = (formData) => {
        usePost("/api/products", formData, allProducts, setAllProducts, setProductAction)
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
        />
    )
}