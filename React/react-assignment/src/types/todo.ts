export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
  dueDate: string;
  createdOn: Date;
};

export type PaginatedTodo = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Todo[];
};
