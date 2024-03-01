const fs = require('fs');

// Create an object with the data you want to save
const data = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

// Convert the object to a JSON string
const jsonData = JSON.stringify(data);

// Specify the file path where you want to save the JSON file
const filePath = 'path/to/file.json';

// Write the JSON data to the file
fs.writeFile(filePath, jsonData, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data saved successfully.');
});