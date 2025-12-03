import { AdminTable } from "./AdminTable";
import { GoalTables } from "./GoalTables";

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
    goalRelation
}){
    return(
        <>
            <h1>
                {title}
            </h1>
            {goalDependant ?
                allGoals.map((goal, index) => {
                    const unGoals = goal?.sustainable_goals
                    return(
                        <div key={index}>
                            <div>
                                <h3>{goal?.solution}</h3>

                                <button onClick={() => {
                                    setGoalId(goal?.id)
                                    setTableAction("add")
                                    setSustainableId(null)
                                }}>
                                    Add UN Sustainable Goal
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
                <div>
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
        </>
    )
}