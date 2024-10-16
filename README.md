# ⏳ Awaiter - The Value Waiting Utility

> ⏰ _"Patience is not simply the ability to wait – it's how we behave while we're waiting."_  
> – Joyce Meyer

Welcome to **Awaiter**, the utility that allows you to wait for a value to be instantiated before proceeding with your operations. With **Awaiter**, you can ensure that your code runs only when the necessary values are ready.

## 💡 Features

- ✅ **Value Instantiation Check**: Wait for a value to be defined (not `null` or `undefined`).
- 🔄 **Customizable Intervals**: Set your own checking intervals for flexibility.
- ⏱️ **Timeout Handling**: Prevent indefinite waiting with customizable timeouts.
- 🛡️ **Error Handling**: Automatically reject the promise if the instantiator function throws an error.

---

## 📦 Installation

You can include **Awaiter** in your project as a simple utility function. Just copy the code or install via npm if available.

```bash
npm install @medieval/awaiter
```

---

## 🚀 Getting Started

Here’s how to use **Awaiter** in your TypeScript project:

```typescript
import { waitForValue } from '@medieval/awaiter';

let someValue: string | undefined;

setTimeout(() => {
  someValue = "Hello, TypeScript!";
}, 2000);

waitForValue<string>(() => someValue, 100, 5000)
  .then((result) => {
    if (result) {
      console.log("Value has been instantiated:", someValue);
    } else {
      console.log("Timeout: Value was not instantiated in time.");
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
```

> 🌈 **Note**: Make sure to define your instantiator function correctly to avoid errors during waiting.

## 📝 Function Signature

```typescript
function waitForValue<T>(
  instantiator: () => T | undefined | null,
  checkInterval?: number,
  timeout?: number
): Promise<boolean>;
```

### Parameters:

- **`instantiator`**: A function that returns the value to wait for. It can return `undefined` or `null` if the value isn't ready yet.
- **`checkInterval`** *(optional)*: The interval in milliseconds to check the value. Default is `100ms`.
- **`timeout`** *(optional)*: The maximum time in milliseconds to wait for the value before timing out. Default is `5000ms`.

### Returns:

- A promise that resolves to `true` if the value is instantiated or `false` if the timeout occurs without the value being instantiated. It rejects if an error occurs in the instantiator function.

---

## 🤝 Contributing

We welcome contributions to **Awaiter**! Whether it’s reporting issues, submitting pull requests, or sharing enhancements, your input is valuable.

> 💡 _"Code is like humor. When you have to explain it, it’s bad."_ – Cory House

Feel free to contribute at the [GitHub repository](https://github.com/your-repo/awaiter).

## 📜 License

This project is licensed under the **MIT License**.

---

✨ Now go ahead and let your code wait for what it needs with **Awaiter**! **Don' forget to be a-waiting!**
