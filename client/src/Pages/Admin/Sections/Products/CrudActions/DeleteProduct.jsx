import { useEffect, useState } from "react"
import { useFetch } from "../../../../../Requests/useFetch"
import { useDelete } from "../../../../../Requests/useDelete"

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
    <form
      className="admin-form popup-form"
      onSubmit={handleSubmit(handleDeleteProduct)}
    >
      <h1>
        Confirm Deletion of Product: {deletePatchProduct?.selectedProductName}
      </h1>

      <div className="form-button-container">
        <button className="form-button form-submit-button">Delete</button>

        <button
          className="form-button form-cancel-button"
          onClick={() => deletePatchGoal.setProductAction(null)}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
