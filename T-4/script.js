
// To-Do List Logic
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  const tasks = getTasks();
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks();
    };
    taskList.appendChild(li);
  });
}

document.getElementById("addBtn").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task !== "") {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    taskInput.value = "";
    renderTasks();
  }
});

renderTasks();

// Product Listing Logic
const products = [
  { name: "T-Shirt", category: "clothing", price: 25, rating: 4.2 },
  { name: "Laptop", category: "tech", price: 900, rating: 4.8 },
  { name: "Headphones", category: "tech", price: 120, rating: 4.5 },
  { name: "Jeans", category: "clothing", price: 60, rating: 4.0 }
];

function filterAndSort() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;

  let filtered = category === "all"
    ? products
    : products.filter(product => product.category === category);

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

function displayProducts(productList) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  productList.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    container.appendChild(div);
  });
}

filterAndSort();
