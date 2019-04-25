const dbName = 'todosDB';

class TodosDatabase {
  constructor () {
    if (!localStorage.getItem(dbName)) {
      this.createDatabase();
    }
    
    this.database = this.getDatabase();
  }
  /*

  (2) [{…}, {…}]
0:
completed: false
id: 1528817077286
task: "Organize Garage"
todos: Array(2)
0: {task: "Donate old clothes", id: 1556211366930, completed: false}
1: {task: "Restock wood for winter", id: 1556211371081, completed: false}
length: 2
__proto__: Array(0)
__proto__: Object
1:
completed: false
id: 1556211337937
task: "Party Prep"
todos: Array(3)
0: {task: "Bake pie and cookies", id: 1556211343020, completed: false}
1: {task: "Wrap presents", id: 1556211348111, completed: false}
2: {task: "Buy paper plates and cups", id: 1556211354705, completed: false}
length: 3
__proto__: Array(0)
__proto__: Object
length: 2
__proto__: Array(0)

  */
  
  createDatabase = () => {
    let mockTodos = [
      {
        task: 'Organize Garage',
        id: 1528817084358,
        completed: false,
        todos: [
          {
            task: "Donate old clothes",
            id: 1556211366930,
            completed: false
          },
          {
            task: "Restock wood for winter",
            id: 1556211371081,
            completed: false
          },
        ]
      },
      {
        task: 'Party Prep',
        id: 1528817077286,
        completed: false,
        todos: [
          {
            task: "Bake pie and cookies",
            id: 1556211343020,
            completed: false
          },
          {
            task: "Wrap presents",
            id: 1556211348111,
            completed: true
          },
          {
            task: "Buy paper plates and cups",
            id: 1556211354705,
            completed: false
          }
        ],
      },
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
