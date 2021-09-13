{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low'
    }
 
    // fieldsToUpdate는 ToDo의 partial 타입
    function updateTodo(todo: ToDo, fieldsToUpdate:Partial<ToDo>): ToDo {
        
        return {...todo, ...fieldsToUpdate} // 
    };

    const todo : ToDo= {
        title: 'learn Typescript',
        description: 'study hard',
        label: 'study',
        priority: 'high'
    }

    const updated = updateTodo(todo, { priority: 'low' })
    console.log(updated);
    // 

}