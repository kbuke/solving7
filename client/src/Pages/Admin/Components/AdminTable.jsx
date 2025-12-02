import "./AdminTable.css"

export function AdminTable({
    tableHeadings, 
    dataArray,
    setTableAction,
    setSelectedCategoryId,
    setSelectedCategroyName,
    relational
}){
    const tableButtons = (text, extraClassName, selectedId, selectedName) => {
        return(
            <button 
                className={`admin-table-button ${extraClassName}`}
                onClick={() => {
                    setTableAction(text)
                    setSelectedCategoryId(selectedId)
                    setSelectedCategroyName(selectedName)
                }}
            >
                {text}
            </button>
        )
    }

    return(
        <table className="admin-table">
            <thead className="table-header">
                <tr>
                    {tableHeadings?.map((heading, index) => (
                        <th key={index}>
                            {heading.header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {dataArray?.map((data, index) => (
                    <tr className="table-rows" key={index}>
                        {tableHeadings?.map((heading) => (
                            <td key={heading.header}>
                                {heading.render
                                    ? heading.render(data[heading.accessor], data)
                                    : data[heading.accessor]
                                }
                            </td>
                        ))}
                        <td>
                            <div className="table-button-container">
                                {relational 
                                    ? null
                                    : tableButtons("Edit", "edit-table-button", data.id, data.name)
                                }

                                {tableButtons("Delete", "delete-table-button", data.id, data.name)}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}