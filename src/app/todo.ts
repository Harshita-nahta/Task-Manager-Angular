export interface Todo {
    id : number,
    created_at : string,
    updated_at : string,
    newTodo: string,
    todoDesc : string,
    isPrior : boolean,
    status: string,
    dueDate : string,
    taskOwner : string
}

export const TODO : Todo[] = [
    {
        id : 1,
        created_at : '20/01/2021',
        updated_at : '20/01/2021',
        newTodo:  'My Task 1',
        todoDesc : 'My Task Description',
        isPrior : false,
        status: "New Task",
        dueDate : '2021-01-21',
        taskOwner : 'Harshita'
    },
    {
        id : 2,
        created_at : '21/01/2021',
        updated_at : '21/01/2021',
        newTodo:  'My Task 2',
        todoDesc : 'My Task Description 2',
        isPrior : false,
        status: "In Progress",
        dueDate : '2021-01-22',
        taskOwner : 'Atul'
    },
    {
        id : 3,
        created_at : '20/01/2021',
        updated_at : '20/01/2021',
        newTodo:  'My Task 3',
        todoDesc : 'My Task Description 3',
        isPrior : false,
        status: "Completed",
        dueDate : '2021-01-21',
        taskOwner : 'Saumik'
    },
    {
        id : 4,
        created_at : '22/01/2021',
        updated_at : '22/01/2021',
        newTodo:  'My Task 4',
        todoDesc : 'My Task Description 4',
        isPrior : true,
        status: "On Hold",
        dueDate : '2021-01-24',
        taskOwner : 'Hamsa'
    },
    {
        id : 5,
        created_at : '25/01/2021',
        updated_at : '25/01/2021',
        newTodo:  'My Task 5',
        todoDesc : 'My Task Description 5',
        isPrior : false,
        status: "New Task",
        dueDate : '2021-01-27',
        taskOwner : 'Pawan'
    },
    {
        id :6 ,
        created_at : '02/01/2021',
        updated_at : '02/01/2021',
        newTodo:  'My Task 6',
        todoDesc : 'New Task',
        isPrior : false,
        status: "Completed",
        dueDate : '2021-01-26',
        taskOwner : 'Harshita'
    },
    {
        id : 7,
        created_at : '20/01/2021',
        updated_at : '22/01/2021',
        newTodo:  'My Task 7',
        todoDesc : 'My Task Description 7',
        isPrior : false,
        status: "In Progress",
        dueDate : '2021-01-22',
        taskOwner : 'Prasanth'
    },
                
];