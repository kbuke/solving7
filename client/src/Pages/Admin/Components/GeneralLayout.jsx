import { AdminTable } from "./AdminTable";

export function GeneralLayout({
    title,
    tableHeadings,
    dataArray,
    setTableAction,
    setSelectedCategoryId,
    setSelectedCategoryName,
    relational,
    dependantArray,
    setOtherCategoryId
}){
    return(
        <div>
            <h1>
                {title}
            </h1>

            {relational 
                ? <div>
                    {dataArray?.map(((data, index) => (
                        <div key={index}>
                            <div>
                                <h2>
                                    {data?.solution}
                                </h2>

                                <button onClick={() => {
                                    setTableAction("add")
                                    setOtherCategoryId(data.id)
                                }}>
                                    Add UN-Goal
                                </button>
                            </div>

                            <AdminTable 
                                tableHeadings={tableHeadings}
                                dataArray={dependantArray[index]}
                                setTableAction={setTableAction}
                                setSelectedCategoryId={setSelectedCategoryId}
                                relational={relational}
                            />
                        </div>
                    )))}
                </div>
                : <div>
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
            }
        </div>
    )
}