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
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: String,
});

const Fruit = model("Fruit", fruitSchema);

const orange = new Fruit({
  name: "Orange",
  rating: 5,
  review: "Great fruit. You will like it",
});

const apple = new Fruit({
  name: "Apple",
  rating: 4.5,
  review: "A good fruit. You will enjoy it",
});

const Pineapple = new Fruit({
  rating: 4.5,
  review: "A delicious fruit. You will love it",
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

// person.save();
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

const peach = new Fruit({
  name: "Peach",
  rating: 5,
  review: "Yet to taste but I think you will love it",
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

async function updateFruit() {
  try {
    const fruitName = await Fruit.updateOne(
      { _id: "6748851693d034fa5b22fddb" },
      { name: "Pineapple" }
    );
    console.log("Fruit name added");
  } catch (error) {
    console.log(error);
  }
}

async function deletePeach(fruitName) {
  try {
    await Fruit.deleteOne(fruitName);
    console.log(`${fruitName} has been deleted`);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
}

async function deletePersons(personName) {
  try {
    await Person.deleteMany({ name: personName });
    console.log("deleted");
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
}

deletePersons("Eric");
