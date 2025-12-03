import { useState } from "react";
import { GeneralLayout } from "../Components/GeneralLayout";
import { PostProduct } from "./CrudActions/PostProduct";

export function AdminProducts({
    appData,
    register,
    handleSubmit,
    errors, 
    reset
}){
    const [productAction, setProductAction] = useState()
    const [selectedProductId, setSelectedProductId] = useState()
    const [selectedProductName, setSelectedProductName] = useState()

    const allProducts = appData?.allProducts
    const setAllProducts = appData?.setAllProducts

    console.log(allProducts)

    const productHeadings = [
        {
            header: "Product Name", accessor: "name"
        },
        {
            header: "No. Made", accessor: "no_made"
        },
        {
            header: "Product Image", accessor: "img",
            render: (value) => <img src={value} alt="" width={80}/>
        }
    ]

    return(
        <div>
            <GeneralLayout 
                title={"Products"}
                tableHeadings={productHeadings}
                dataArray={allProducts}
                setTableAction={setProductAction}
                setSelectedCategoryId={setSelectedProductId}
                setSelectedCategoryName={setSelectedProductName}
            />

            {productAction
                ? <div className="popup-container">
                    {productAction === "add"
                        ? <PostProduct 
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            setProductAction={setProductAction}
                            inputContainer={appData?.inputContainer}
                        />
                        : null
                    }
                </div>
                : null
            }
        </div>
    )
}