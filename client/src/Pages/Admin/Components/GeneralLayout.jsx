import { AdminTable } from "./AdminTable";

export function GeneralLayout({
    title,
    tableHeadings,
    dataArray,
    setTableAction,
    setSelectedCategoryId,
    setSelectedCategoryName
}){
    return(
        <div>
            <h1>
                {title}
            </h1>

            <button onClick={() => setTableAction("add")}>
                Add {title}
            </button>

            <AdminTable 
                tableHeadings={tableHeadings}
                dataArray={dataArray}
                setTableAction={setTableAction}
                setSelectedCategoryId={setSelectedCategoryId}
                setSelectedCategroyName={setSelectedCategoryName}
            />
        </div>
    )
}