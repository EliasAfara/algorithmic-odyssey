#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <category> <algorithm>"
    exit 1
fi

category="$1"
algorithm="$2"
category_path="${category}/tests"

# Create the category directory and the tests directory if they don't exist
mkdir -p "$category_path"

# Create the algorithm.js file
algorithm_js="${category}/${algorithm}.js"
touch "$algorithm_js"
echo "// Implement your algorithm here" > "$algorithm_js"

# Create the algorithm.test.js file
algorithm_test_js="${category_path}/${algorithm}.test.js"
touch "$algorithm_test_js"
echo "// Implement tests for your algorithm here" > "$algorithm_test_js"

echo "Created $algorithm_js and $algorithm_test_js"
