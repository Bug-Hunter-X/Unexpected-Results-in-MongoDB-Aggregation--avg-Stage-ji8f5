```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  {
    $match: { age: { $gt: 25 } } //This will match all users with age greater than 25
  },
  {
    $group: { //This will group based on the age
      _id: "$age",
      count: { $sum: 1 },
      averageAge: { $avg: "$age" },
    }
  },
  {
    $sort: { count: -1 } //This will sort the result based on the count
  }
])
```