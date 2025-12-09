import { usePatch } from "../../../../../Requests/usePatch"
import { useEffect } from "react"
import { PostPatchInstance } from "../../../Components/PostPatchInstance"

export function PatchProduct({
  deletePatchProduct,
  productInputs,
  register,
  handleSubmit,
  reset,
  product,
  control
}) {

  useEffect(() => {
    if (product) {
      reset({
        productName: product.name,
        productImg: product.img,
        numberOfProduct: product.no_made,
        solutionId: product.solution_id
      })
    }
  }, [product, reset])

  const handleProductPatch = (formData) => {
    const patchData = {
      productName: formData.productName,
      productImg: formData.productImg,
      numberOfProduct: formData.numberOfProduct,
    }

    usePatch(
      patchData,
      `/api/products/${deletePatchProduct?.selectedProductId}`,
      deletePatchProduct?.selectedProductId,
      deletePatchProduct?.setAllProducts,
      deletePatchProduct.setProductAction
    )
  }

  return (
    <PostPatchInstance 
      patchOrPost={"patch"}
      handleInstancePatch={handleProductPatch}
      handleSubmit={handleSubmit}
      inputArray={productInputs}
      setInstanceAction={deletePatchProduct?.setProductAction}
      reset={reset}
      register={register}
      control={control}
    />
  )
}
