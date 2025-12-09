import { useState } from "react"
import { GeneralLayout } from "../../Components/GeneralLayout"
import { PostProduct } from "./CrudActions/PostProduct"
import { PatchProduct } from "./CrudActions/PatchProduct"
import { DeleteProduct } from "./CrudActions/DeleteProduct"
import { useFetch } from "../../../../Requests/useFetch"

export function AdminProducts({
  appData,
  register,
  handleSubmit,
  errors,
  reset,
  control
}) {
  const [productAction, setProductAction] = useState()
  const [selectedProductId, setSelectedProductId] = useState()
  const [selectedProductName, setSelectedProductName] = useState()
  const [productPostOrPatch, setProductPatchOrPost] = useState()
  const [solutionId, setSolutionId] = useState()

  const allProducts = appData?.allProducts
  const setAllProducts = appData?.setAllProducts

  const [product, setProduct] = useState()
  
  useFetch(`/api/products/${selectedProductId}`, setProduct, [selectedProductId, allProducts])

  const allSolutions = appData?.allSolutions

  const renderMissions = allSolutions?.map((mission) => ({
    value: mission.id,
    label: mission.solution,
  }))

  const productHeadings = [
    {
      header: "Product Name",
      accessor: "name",
    },
    {
      header: "No. Made",
      accessor: "no_made",
    },
    {
      header: "Product Image",
      accessor: "img",
      render: (value) => <img src={value} alt="" width={80} />,
    },
  ]

  const productInputs = [
    {
      label: "Please enter product name",
      type: "text",
      placeholder: "Please enter product name",
      registerOptions: {
        required: "Please enter a value", 
        validate: value => {
          const exists = allProducts?.some(
            product => 
              product.name.toLowerCase() === value.toLowerCase() &&
              product.id != selectedProductId
          )
          return !exists || `${value} is already registered`
        }
      },
      name: "productName"
    },

    {
      label: "Please enter an image for product",
      type: "text",
      placeholder: "Please enter an image for product",
      registerOptions: {
        required: "Please enter a value"
      },
      name: "productImg"
    },

    {
      label: "Please enter how many of said product you have made",
      type: "text",
      placeholder: "Please enter how many of saifd product you have made",
      registerOptions: {
        required: "Please enter a value"
      },
      name: "numberOfProduct"
    },

    {
      label: "Please select which pillar this related to",
      type: "select",
      placeholder: "Please select which pillar this related to",
      registerOptions: {
        required: "Please select a pillar"
      },
      name: "solutionId",
      renderedOptions: allSolutions?.map((solution) => ({
        value: solution.id,
        label: solution.solution
      })),
      setOptionId: setSolutionId,
      chosenId: solutionId
    }
  ]

  const deletePatchProduct = {
    selectedProductId: selectedProductId,
    setSelectedProductId: setSelectedProductId,
    selectedProductName: selectedProductName,
    setSelectedProductName: setSelectedProductName,
    setProductAction: setProductAction,
    setAllProducts: setAllProducts,
  }

  return (
    <div>
      <GeneralLayout
        title={"Products"}
        tableHeadings={productHeadings}
        dataArray={allProducts}
        setTableAction={setProductAction}
        setSelectedCategoryId={setSelectedProductId}
        setSelectedCategoryName={setSelectedProductName}
        reset={reset}
        setPostOrPatch={setProductPatchOrPost}
      />

      {productAction ? (
        <div className="popup-container">
          {productAction === "add" ? (
            <PostProduct
              handleSubmit={handleSubmit}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              setProductAction={setProductAction}
              productInputs={productInputs}
              productAction={productAction}
              reset={reset}
              register={register}
              errors={errors}
              control={control}
              solutionId={solutionId}
            />
          ) : productAction === "Edit" ? (
            <PatchProduct
              deletePatchProduct={deletePatchProduct}
              productInputs={productInputs}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              reset={reset}
              product={product}
              control={control}
            />
          ) : (
            <DeleteProduct
              deletePatchProduct={deletePatchProduct}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      ) : null}
    </div>
  )
}
