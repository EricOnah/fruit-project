import { mongoose, connect, Schema, model } from "mongoose";

const url = "mongodb://0.0.0.0:27017/fruitDB";

async function main() {
  await connect(url);
  console.log("Connected to MongoDB");
}

main().catch((err) => console.error(err));

// ******* Mongoose create *****//

// Insert items to fruitsDB

const fruitSchema = new Schema({
  name: {
    type: String,
    required: [true, "Why no name?"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: String,
});

const Fruit = model("Fruit", fruitSchema);

const orange = new Fruit({
  rating: 5,
  review: "Great fruit. You will like it",
});

const apple = new Fruit({
  name: "Apple",
  rating: 4.5,
  review: "A good fruit. You will enjoy it",
});

const personSchema = new Schema({
  name: String,
  age: Number,
  fruit: [fruitSchema],
});
const Person = model("Person", personSchema);

const person = new Person({
  name: "Eric",
  age: 26,
  fruit: [
    {
      name: "Banana",
      rating: 5,
      review: "Sweet and tasty",
    },
  ],
});

const mango = new Fruit({
  name: "Mango",
  rating: 4,
  review: "A delicious fruit. You will love it",
});

const pear = new Fruit({
  name: "Pear",
  rating: 5,
  review: "A delicious fruit. You will love it",
});

const grape = new Fruit({
  name: "Grapefruit",
  rating: 5,
  review: "A delicious fruit. You will love it",
});

// async function findFruit() {
//   try {
//     const fruits = await Fruit.find({});
//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("**************************************");
//   }
// }

// findFruit();
// const findPerson = async () => {
//   try {
//     const person = await Person.find({});
//     person.forEach((p) => {
//       let personFruit = p.fruit;
//       personFruit.forEach((f) => {
//         console.log(
//           `Person: ${p.name}, Preferred Fruit: ${f.name}, Rating: ${f.rating}`
//         );
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// findPerson();

orange.save().then((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Data saved");
  }
});
