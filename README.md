# MongoDB Aggregation $avg Operator Unexpected Results

This repository demonstrates a common error encountered when using the `$avg` operator within a MongoDB aggregation pipeline.

## Problem
The provided JavaScript code uses MongoDB's aggregation framework to group documents based on their age and then calculates the average age within each group.  However, the use of the same field ('age') in both the `$group` and `$avg` stages can lead to incorrect or unexpected results, particularly if not all documents in the collection have an age value. 

The `bug.js` file contains the code exhibiting this issue. The `bugSolution.js` file provides a corrected version.

## Solution
The solution involves carefully selecting the fields used in the `$group` and `$avg` stages to ensure the correct calculation of the average.

## How to Run
1.  Make sure you have MongoDB installed and running.
2.  Create a sample `users` collection.
3.  Run the code in `bug.js` to observe the error.
4.  Run the code in `bugSolution.js` to see the corrected output.
