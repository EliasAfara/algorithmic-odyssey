#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <category> <algorithm.js> <algorithm.test.js>"
    exit 1
fi

category="$1"
algorithm_js="$2"
algorithm_test_js="$3"
category_path="${category}/tests"

# Create the category directory and the tests directory if they don't exist
mkdir -p "$category_path"

# Create the algorithm file
algorithm_file_path="${category}/${algorithm_js}"
touch "$algorithm_file_path"
echo "// Implement your algorithm here" > "$algorithm_file_path"

# Create the test file
test_file_path="${category_path}/${algorithm_test_js}"
touch "$test_file_path"
echo "// Implement tests for your algorithm here" > "$test_file_path"

echo "Created $algorithm_file_path and $test_file_path"
