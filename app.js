
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true , useUnifiedTopology: true });



const fruitSchema = new mongoose.Schema ({
  name:{
    type:String,
    required :[true, "Why no names"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});

//model(Name of collection in singular and schema name
const Fruit = mongoose.model("Fruit",fruitSchema);

//creating this fruit with above model Fruit
// const fruit = new Fruit({
//   name:"Peaches",
//   rating:7,
//   review:"Peaches are yummy."
// });
//
// const mango = new Fruit({
//   name:"Mango",
//   rating:9,
//   review:"King of Fruits."
// });
  const kiwi = new Fruit({
    name:"Kiwi",
    rating:9,
    review:"improve immunity."

});

//save method
//fruit.save();
// Fruit.insertMany([kiwi,fruit,mango], function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Inserted successfully.");
//   }
// })
//

const personSchema = new mongoose.Schema ({
  name:String,
  age:Number,
  favouriteFruit : fruitSchema
});

//model(Name of collection in singular and schema name----- person will become people----
const Person = mongoose.model("Person",personSchema);

//creating this fruit with above model Fruit
const person = new Person({
  name:"Gaurav",
  age:25

});

//save method
//person.save();


//update
// Fruit.updateOne({_id:"5f40d69a9c0a8f0f34a646dd"},{name:"Peach"},function(err){
//   if(err){
//       console.log(err);
//     }
//     else{
//       console.log("Values Updated");
//         }
//       });

//update relationship
Person.updateOne({name:"Gaurav"},{favouriteFruit:kiwi},function(err){
  if(err)
  {
    console.log(err);
  }
  else{
    console.log("One record updated");
  }
})


//delete
      // Fruit.deleteOne({name:"Peach"},function(err){
      //   if(err){
      //       console.log(err);
      //     }
      //     else{
      //       console.log("Values Deleted");
      //         }
      //       });

      // Person.deleteMany({name:"Gaurav"},function(err){
      //   if(err){
      //       console.log(err);
      //     }
      //     else{
      //       console.log("Values Deleted");
      //         }
      //       });

Fruit.find(function(err,fruits){
  if(err){
      console.log(err);
    }
    else{
      //console.log(fruits);
      mongoose.connection.close();
      fruits.forEach(function(fruit){
        console.log(fruit.name);
      });

    }
})



// Person.find(function(err,people){
//   if(err){
//       console.log(err);
//     }
//     else{
//       console.log(people);
//     }
// })















//////////////////////////Without mongoose i.e using Native MongoDB Driver








// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'fruitsDB';
//
// // Create a new MongoClient add { useUnifiedTopology: true }
// const client = new MongoClient(url ,{ useUnifiedTopology: true });
//
// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
// //insertDocuments(db, function() {
//   findDocuments(db, function() {
//       client.close();
//     });
// });
// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruitsDB');
//   // Insert some documents
//   collection.insertMany([
//     {Name :"Apple",score:8, review:"Great Fruit"},
//     {Name :"Orange",score:7, review:"Mix Fruit Kinda Sour"},
//     {Name :"Banana",score:9, review:"Great Stuff"},
//
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }
//
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruitsDB');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(fruits);
//   });
// }
