# Learning_Mongo
 MongoDB with help of Native MongoDb Driver and Mongoose
 
 run 
 >
 mongod 
 //command in shell 1 and
 
 
 > mongo 
//command in shell 2

show dbs

use fruitsdb

show collections
//shows Tables(collections = tables as in SQl language)

db.fruits.find()

db.fruits.find(name:"Apple")

//1)mongoDB using Native mongoDB driver (search mongoDB/quickstart in google for docs)

npm i mongodb

//Incase of accidental shutdown of server 27017
sudo pkill -f mongod

//2)MongoDB with Mongoose
npm i mongoose
