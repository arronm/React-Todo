const dbName = 'todosDB';

class TodosDatabase {
  constructor () {
    if (!localStorage.getItem(dbName)) {
      this.createDatabase();
    }
    
    this.database = this.getDatabase();
  }
  
  createDatabase = () => {
    let mockTodos = [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false,
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false,
      }
    ];

    localStorage.setItem(dbName, JSON.stringify(mockTodos));
    return mockTodos;
  }

  getDatabase = () => JSON.parse(localStorage.getItem(dbName));

  add = (todo) => {
    this.database = [...this.database, todo];
    localStorage.setItem(dbName, JSON.stringify(this.database));
    return this.database;
  }
  
  update = (todos) => {
    this.database = todos;
    localStorage.setItem(dbName, JSON.stringify(this.database));
    return this.database;
  }
}

export default TodosDatabase;