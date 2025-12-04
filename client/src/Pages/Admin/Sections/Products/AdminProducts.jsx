import { useState } from "react"
import { GeneralLayout } from "../../Components/GeneralLayout"
import { PostProduct } from "./CrudActions/PostProduct"
import { PatchProduct } from "./CrudActions/PatchProduct"
import { DeleteProduct } from "./CrudActions/DeleteProduct"

export function AdminProducts({
  appData,
  register,
  handleSubmit,
  errors,
  reset,
}) {
  const [productAction, setProductAction] = useState()
  const [selectedProductId, setSelectedProductId] = useState()
  const [selectedProductName, setSelectedProductName] = useState()
  const [solutionId, setSolutionId] = useState()

  const allProducts = appData?.allProducts
  const setAllProducts = appData?.setAllProducts

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
      />

      {productAction ? (
        <div className="popup-container">
          {productAction === "add" ? (
            <PostProduct
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              setProductAction={setProductAction}
              inputContainer={appData?.inputContainer}
              renderMissions={renderMissions}
              solutionId={solutionId}
              setSolutionId={setSolutionId}
            />
          ) : productAction === "Edit" ? (
            <PatchProduct
              deletePatchProduct={deletePatchProduct}
              inputContainer={appData?.inputContainer}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              reset={reset}
              renderMissions={renderMissions}
              solutionId={solutionId}
              setSolutionId={setSolutionId}
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
