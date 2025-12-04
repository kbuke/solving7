import "./GoalTables.css"

export function GoalTables({
    tableHeadings,
    dataArray,
    setTableAction,
    setSelectedCategoryId,
    setSelectedCategoryName,
    setGoalId,
    goalId
}){
    return(
        dataArray.length === 0
            ? <div className="no-info-div">
                <p className="no-info-text">Nothing to display</p>
            </div>
            :
            <table
                className={`admin-table`}
            >
                <thead
                    className="table-header"
                >
                    <tr>
                        {tableHeadings?.map((heading) => (
                            <th
                                key={heading.header}
                            >
                                {heading.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {dataArray?.map((data, index) => (
                        <tr
                            key={index}
                            className="table-rows"
                        >
                            {tableHeadings?.map((heading) => (
                                <td
                                    key={heading.header}
                                >
                                    {heading.render
                                        ? heading.render(data[heading.accessor], data)
                                        : data[heading.accessor]
                                    }
                                </td>
                            ))}
                            <td>
                                <div
                                    className="table-button-container"
                                >
                                    <button
                                        className="admin-table-button delete-table-button"
                                        onClick={() => {
                                            setTableAction("delete")
                                            setSelectedCategoryId(data.id)
                                            setGoalId(goalId)
                                            // {setSelectedCategoryName ? setSelectedCategoryName(data.name) : null}
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}