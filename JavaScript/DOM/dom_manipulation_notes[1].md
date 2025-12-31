# JavaScript DOM Manipulation

## 🌐 What is the DOM?

**DOM (Document Object Model)** is a programming interface that allows JavaScript to access and manipulate HTML and CSS of a webpage.

When a webpage loads, the browser creates a **DOM tree** that represents the page's structure.

---

## 🔑 Why Learn DOM Manipulation?

- To change content dynamically
- To handle user input
- To build interactive web pages (forms, sliders, modals, etc.)

---

## 🛠️ Selecting Elements

### 1. `getElementById()`

```js
const title = document.getElementById("main-title");
```

### 2. `getElementsByClassName()`

```js
const items = document.getElementsByClassName("list-item");
```

### 3. `getElementsByTagName()`

```js
const paragraphs = document.getElementsByTagName("p");
```

### 4. `querySelector()`

```js
const firstItem = document.querySelector(".list-item");
```

### 5. `querySelectorAll()`

```js
const allItems = document.querySelectorAll(".list-item");
```

---

## ✏️ Changing Content and Attributes

### 1. `innerText`

```js
document.querySelector("h1").innerText = "Hello, DOM!";
```

### 2. `innerHTML`

```js
document.querySelector("#container").innerHTML = "<p>New Content</p>";
```

### 3. `setAttribute()` and `getAttribute()`

```js
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
console.log(link.getAttribute("href"));
```

### 4. `classList`

```js
const box = document.querySelector(".box");
box.classList.add("active");
box.classList.remove("inactive");
box.classList.toggle("highlight");
```

---

## 🎨 Styling Elements

```js
const heading = document.querySelector("h1");
heading.style.color = "blue";
heading.style.fontSize = "32px";
```

---

## ➕ Creating and Removing Elements

### 1. `createElement()`

```js
const newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph.";
document.body.appendChild(newPara);
```

### 2. `removeChild()`

```js
const list = document.getElementById("my-list");
const item = document.getElementById("item-1");
list.removeChild(item);
```

---

## 🧠 Real Life Example: Add Item to List

```js
const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.innerText = input.value;
  list.appendChild(newItem);
  input.value = "";
});
```

---

## 📝 Practice Tasks

### Q1. Change the background color of the page when a button is clicked.

### Q2. Create a new paragraph using JS and add it inside a div.

### Q3. Toggle a CSS class on a button click.

### Q4. Add items to a list from user input.

### Q5. Remove a specific list item using `removeChild()`.

---

## ✅ What’s Next?

After DOM Manipulation, learn:

- **Events in JavaScript** (click, mouseover, submit, etc.)
- **Asynchronous JavaScript** (Promises, async/await)
- **Fetch API**

Let me know when you’re ready!

