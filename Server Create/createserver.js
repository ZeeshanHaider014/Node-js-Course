// Sting to Object
//const jsonString = '{"Name": "Zeeshan", "Age": 30, "city" : "Rawalpindi"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.Age);

//OBJECT TO STRING
const objectToConvert = {
    name : "Ali",
    Age : 34,
    Address : "Balghar "
}
const jsonStringified = JSON.stringify(objectToConvert);
console.log(jsonStringified)