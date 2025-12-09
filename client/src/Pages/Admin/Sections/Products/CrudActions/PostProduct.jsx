import { useEffect } from "react"
import { postData } from "../../../../../Requests/postData"
import { PostPatchInstance } from "../../../Components/PostPatchInstance"

export function PostProduct({
  handleSubmit,
  allProducts,
  setAllProducts,
  setProductAction,
  productInputs,
  productAction,
  reset,
  register,
  errors,
  control,
  solutionId
}) {

  useEffect(() => {
    if(!productAction) return;

    if(productAction === "add") {
      reset({
        productName: "",
        productImg: "",
        numberOfProduct: "",
        solutionId: ""
      })
    }
  }, [productAction])

  const handleProductPost = (formData) => {
    const finalData = {
      ...formData,
      solutionId: solutionId,
    }
    postData(
      "/api/products",
      finalData,
      allProducts,
      setAllProducts,
      setProductAction
    )
  }

  return (
    <PostPatchInstance 
      patchOrPost={"post"}
      handleInstancePost={handleProductPost}
      handleSubmit={handleSubmit}
      inputArray={productInputs}
      setInstanceAction={setProductAction}
      reset={reset}
      register={register}
      errors={errors}
      control={control}
    />
  )
}
