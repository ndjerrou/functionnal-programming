const user = {
  //don't modify it - we want this object to be immutable
  firstName: "Patrick",
  age: 30,
  address: {
    city: "Paris",
    street: "1 rue des tulipes",
  },
};

// To avoid (cf below)

// const updated = user;
// updated.firstName = "Bob";

// console.log("user = ", user);
// console.log("updated = ", updated);

/////////  Using the spread operator ...
const updated = { ...user, age: 31, gender: "M" };
// console.log(updated);
// console.log("user = ", user);

/////////  Using the assign method ...

const userUpdated = Object.assign({}, user, { age: 31 });
// console.log(userUpdated);
// console.log(user);

const unObjet = {}; // in memory : 100
const updatedUser = user; // in memory : updatedUser pointe vers la même ref. que user

updatedUser.firstName = "Bob";

// console.log("user = ", user);
// console.log("updatedUser = ", updatedUser);
// console.log(updatedUser === user);

/// Problems with shallow copy

//wrong !!

// updated1.address.city = "Lille";

//correct below :

const updated1 = {
  ...user,
  firstName: "Rachid",
  address: { ...user.address, city: "Lille" }, // we've just done a deep copy
};

updated1.statusMarital = "Married";

console.log(updated1);
console.log(user);
console.log(updated1 === user); // ech object points to it's own ref
