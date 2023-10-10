import path from "path";
import fs from "fs/promises";
import { globby } from "globby";

// Function to generate the Markdown content
async function generateMarkdown() {
  const output = [];

  // Find JavaScript files using glob pattern and exclude specified directories and file types.
  const filePaths = await globby([
    "**/*.js", // Include all JavaScript files.
    "!(node_modules|.github)/**/*", // Exclude 'node_modules' and '.github' directories.
    "!**/tests/**/*", // Exclude 'tests' directories.
    "!**/*.test.js", // Exclude JavaScript test files.
    "!**/*.manual-test.js", // Exclude manual test files.
    "!vitest.config.ts", // Exclude 'vitest.config.ts' file.
  ]);

  let oldPath = "";
  // Sort file paths case-insensitively for consistent order.
  filePaths.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  // Add a top-level heading as the first line in the output.
  output.push("# Directory of Algorithms\n");

  for (const filePath of filePaths) {
    const filename = path.basename(filePath);
    const dirname = path.dirname(filePath);

    if (dirname !== oldPath) {
      if (oldPath) {
        output.push(""); // Add an empty line to separate categories.
      }
      oldPath = printPath(oldPath, dirname, output);
    }

    const indent = dirname.split(path.sep).length;
    const prefix = " ".repeat(indent * 2); // Adjust the indentation for MarkdownLint.

    const name = path.basename(filename, ".js");
    const url = path.join(dirname, filename);

    output.push(`${prefix}- [${name}](${url})`); // Use hyphen prefix for Markdown list.
  }

  return output.join("\n");
}

// Function to print the directory path in Markdown
function printPath(oldPath, newPath, output) {
  const oldParts = oldPath.split(path.sep);
  const newParts = newPath.split(path.sep);

  for (let i = 0; i < newParts.length; ++i) {
    const newPart = newParts[i];
    if (i + 1 > oldParts.length || oldParts[i] !== newPart) {
      if (newPart) {
        output.push(`${" ".repeat(i * 2)}- **${newPart.replace("_", " ")}**`); // Adjust indentation for MarkdownLint.
      }
    }
  }

  return newPath;
}

// Main function to execute the process
async function main() {
  try {
    const markdown = await generateMarkdown();
    await fs.writeFile("DIRECTORY.md", markdown + "\n", { encoding: "utf8" });
    console.log("DIRECTORY.md updated successfully.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Run the main function
main();
