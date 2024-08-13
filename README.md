# `waitForValue` Function

## Overview

The `waitForValue` function is a TypeScript utility that allows you to wait for a value to be instantiated (i.e., to be not `undefined` or `null`). It repeatedly checks the value at specified intervals and resolves a promise when the value is set or rejects if an error occurs.

This function is useful when you need to wait for asynchronous operations to complete or for values that are expected to be set at a later time.

## Features

- **🔓 Generic Type Support**: Works with any type.
- **⏱ Customizable Check Interval**: Define how frequently the function checks the value.
- **🏁 Timeout Handling**: Specify a maximum wait time to prevent indefinite waiting.
- **❌ Error Handling**: Properly handles and rejects the promise if an error occurs.