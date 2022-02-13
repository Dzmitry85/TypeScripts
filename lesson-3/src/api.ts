interface ToDo {
    userId: number,
    id: number,
    title: string,
    cound: boolean
  }
  
  export function getTodosByCount() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then<ToDo>((response) => {
        return response.json();
      })
      .then((validatedData) => {
        if (validatedData.cound == true) {
          console.log('Пусто');
        } else {
          console.log(validatedData);
        }
      })
      
  } 