
export async function getTodoList() {
  const data = (await fetch('/todos/list')).json();
  return data;
}
