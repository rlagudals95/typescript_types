{
    type ToDo = {
        title: string;
        description: string;
    }
 
    function display(todo: Readonly<ToDo> ) { // Readonly 객체의 불변성 보장
        todo.title = 'jaja';
    }


}