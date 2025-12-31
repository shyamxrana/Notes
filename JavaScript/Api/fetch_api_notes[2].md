# Fetch API in JavaScript

## 🌐 What is the Fetch API?

The **Fetch API** allows you to make HTTP requests in JavaScript to get or send data from/to a server (like getting data from an API).

It returns a **Promise**, making it easy to use with `.then()` or `async/await`.

---

## 📥 Basic GET Request

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
```

---

## ✨ Using async/await

```js
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();
```

---

## 📤 POST Request

Sending data to the server:

```js
async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Hello',
        body: 'This is a test post',
        userId: 1
      })
    });
    const data = await response.json();
    console.log('Created:', data);
  } catch (error) {
    console.log('Error:', error);
  }
}

createPost();
```

---

## 🔁 Other Request Methods

- `GET` – retrieve data (default)
- `POST` – send new data
- `PUT` – update existing data
- `DELETE` – delete data

---

## 📊 Check Response Status

```js
const res = await fetch(url);
if (!res.ok) {
  throw new Error('Failed to fetch');
}
```

---

## 🌍 Real Use Case: Show Users in List

```js
async function showUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    document.body.appendChild(li);
  });
}

showUsers();
```

---

## ⚠️ Handling Errors

Always use try/catch or `.catch()` to prevent your app from crashing.

---

## 📝 Practice Questions

### Q1. Make a GET request and display the response on the page.

### Q2. Create a form and submit it using the POST method.

### Q3. Use the DELETE method to remove a fake post.

### Q4. Fetch a list of users and render them in the DOM.

### Q5. Show an error message if the API fetch fails.

---

## ✅ What’s Next?

Now you’re ready to explore:

- **Local Storage & Session Storage**
- **Working with JSON deeply**
- **Mini Projects using APIs** (Weather App, Todo App, etc.)

Let me know when you're ready!

