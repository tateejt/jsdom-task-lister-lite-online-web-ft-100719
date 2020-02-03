document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new TaskList();
  
  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.innerHTML = taskList.render());
  
  renderApp()
});
