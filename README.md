# Algorithmic Odyssey - JavaScript

<!-- Front Matter -->

Welcome to my Algorithmic Odyssey! This repository is a collection of algorithms and data structures that I've written, explored, and refined as part of my journey into the fascinating world of computer science and problem-solving. Whether you're a fellow learner or an enthusiast, this repository serves as a record of my algorithmic adventures, offering a range of solutions, explanations, and insights

![Algorithmic Odyssey Banner][banner]

<!-- Disclaimer -->

## Getting Started

Before you dive into this repository, there are a few things you need to make sure of.

<!-- Body -->

### Node.js Version Requirement

To explore and run the algorithms and data structures in my "Algorithmic Odyssey - JavaScript" repository, you'll need Node.js installed on your computer. Node.js acts as the underlying engine that powers the execution of these JavaScript algorithms and data structures.

Ensure you have a specific version of Node.js installed to work seamlessly with this repository.

In our `package.json` file, you'll find this line:

```json
"engines": {
    "node": ">=20.6.0"
}
```

### Node.js Release Information

Here's the current release information for Node.js:

| Release | Status  | Codename | Initial Release | Active LTS Start | Maintenance LTS Start | End Of Life |
| ------- | ------- | -------- | --------------- | ---------------- | --------------------- | ----------- |
| V20     | Current |          | 2023-04-18      | 2023-10-24       | 2024-10-22            | 2026-04-30  |

For more details on Node.js releases, you can refer to the [official Node.js release page](https://nodejs.dev/en/about/releases/).

### Testing

Writing tests for our Algorithms will help us ensure the implementations are airtight even after multiple fixes and code changes.

We use [Vitest](https://vitest.dev/) to run unit tests on our algorithms. It provides a very readable and expressive way to structure your test code.

First, you should install all dependencies using:

```bash
npm install
```

You can (and should!) run all tests locally before committing your changes:

```bash
npm test
```

If you want to save some time and just run a specific test:

```bash
# This will run any test file where the filename contains "keyword" (no need to specify folder path)
npm test -- keyword
```

You can also start Vitest in "watch" mode:

```bash
npm run test-watch
```

### Creating New Algorithms and Tests

If you'd like to contribute and add new algorithms and their corresponding test files to this repository, you can use an npm script we've provided. Please note that this step is optional, and you can create the files manually if you prefer.

To create new algorithm and test files, follow these steps:

1. Open your terminal and navigate to the root directory of the repository.

2. Use the following command to create a new algorithm and its corresponding test file. Replace `<category>`, `<algorithm>` with your desired values:

   ```bash
   npm run create-algorithm <category> <algorithm>
   ```

   For example:

   ```bash
   npm run create-algorithm Searching BinarySearch
   ```

3. The script will create the specified algorithm and test files in the appropriate category folder.

<!-- Banner Image -->

[banner]: https://github.com/EliasAfara/algorithmic-odyssey/assets/39487200/eb07f16e-11e6-4f3c-9ee9-504f5dbf83c7

<!-- Badge Links -->
