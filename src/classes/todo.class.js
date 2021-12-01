export class Todo {
  static fromJson({ id, tarea, completado, cread }) {
    const temTodo = new Todo();
    temTodo.id = id;
    temTodo.tarea = tarea;
    temTodo.completado = completado;
    temTodo.cread = cread;
    return temTodo;
  }
  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime();
    this.completado = false;
    this.cread = new Date();
  }
}
