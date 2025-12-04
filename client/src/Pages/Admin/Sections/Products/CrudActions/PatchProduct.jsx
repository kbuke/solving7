import { usePatch } from "../../../../../Requests/usePatch"
import { PostPatchProduct } from "./PostPatchProduct"
import { useState, useEffect } from "react"
import { useFetch } from "../../../../../Requests/useFetch"

export function PatchProduct({
  deletePatchProduct,
  inputContainer,
  register,
  handleSubmit,
  errors,
  reset,
  renderMissions,
  solutionId,
  setSolutionId,
}) {
  const [product, setProduct] = useState()

  useFetch(`/api/products/${deletePatchProduct?.selectedProductId}`, setProduct)

  useEffect(() => {
    if (product) {
      reset({
        productName: product.name,
        productImg: product.img,
        numberOfProduct: product.no_made,
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
    <PostPatchProduct
      patchOrPost={"patch"}
      allProducts={deletePatchProduct?.allProducts}
      setProductAction={deletePatchProduct?.setProductAction}
      handleProductPatch={handleProductPatch}
      handleSubmit={handleSubmit}
      inputContainer={inputContainer}
      register={register}
      errors={errors}
      product={product}
      renderMissions={renderMissions}
      solutionId={solutionId}
      setSolutionId={setSolutionId}
    />
  )
}
