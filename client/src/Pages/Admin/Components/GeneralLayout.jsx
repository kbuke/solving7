import { AdminTable } from "./AdminTable";
import { GoalTables } from "./GoalTables";

import "./GeneralLayout.css"

export function GeneralLayout({
    title,
    tableHeadings,
    dataArray,
    setTableAction,
    setSelectedCategoryId,
    setSelectedCategoryName,
    goalDependant,
    dependantArray,
    setOtherCategoryId,
    setGoalId,
    setSustainableId,
    allGoals,
    goalRelation,
    reset
}){
    return(
        <>
            <h1 className="section-heading">
                {title}
            </h1>
            {goalDependant ?
                allGoals.map((goal, index) => {
                    const unGoals = goal?.sustainable_goals
                    return(
                        <div key={index}>
                            <div className="admin-secondary-header-container">
                                <h3 className="secondary-admin-title">{goal?.solution}</h3>

                                <button onClick={() => {
                                    reset()
                                    setGoalId(goal?.id)
                                    setTableAction("add")
                                    setSustainableId(null)
                                }}
                                    className="add-admin-section-button add-un-goal"
                                >
                                    Add United Nations Sustainable Goal
                                </button>
                            </div>

                            <GoalTables 
                                tableHeadings={tableHeadings}
                                dataArray={
                                    goalRelation==="unSustainability"
                                        ? unGoals
                                        : null
                                }
                                setTableAction={setTableAction}
                                setSelectedCategoryId={
                                    goalRelation==="unSustainability"
                                        ? setSustainableId
                                        : null   
                                }
                                setGoalId={setGoalId}
                                goalId = {goal?.id}
                            />
                        </div>
                    )
                })
                :
                <div className="admin-main-section-container">
                    <button onClick={() => {
                        setTableAction("add")
                        reset()
                    }} className="add-admin-section-button">
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
        </>
    )
}