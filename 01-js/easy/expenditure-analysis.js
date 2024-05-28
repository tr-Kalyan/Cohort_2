/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
let final_list = [];

// Loop through each transaction
transactions.forEach(transaction => {
    const existingCategory = final_list.find(item => item.category === transaction.category);

    if (existingCategory) {
        // If category already exists in final_list, update its totalSpent
        existingCategory.totalSpent += transaction.price;
    } else {
        // If category doesn't exist in final_list, add it with totalSpent
        final_list.push({
            category: transaction.category,
            totalSpent: transaction.price
        });
    }
    return final_list
});





module.exports = calculateTotalSpentByCategory;
