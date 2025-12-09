import { useDelete } from "../../../../../Requests/useDelete"
import { DeleteInstance } from "../../../Components/DeleteInstance"

export function DeleteProduct({ deletePatchProduct, handleSubmit }) {
  const handleDeleteProduct = () => {
    useDelete(
      `/api/products/${deletePatchProduct?.selectedProductId}`,
      deletePatchProduct.setAllProducts,
      deletePatchProduct.selectedProductId,
      deletePatchProduct.setProductAction
    )
  }

  return (
    <DeleteInstance 
      handleSubmit={handleSubmit}
      handleDeleteInstance={handleDeleteProduct}
      setModelAction={deletePatchProduct?.setProductAction}
    />
  )
}
