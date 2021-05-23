let data = "05/26/2021";
console.log(data);
let message = "Happy birthday, Rodrigo";
console.log(message);
message = message.split(",");
console.log(message);

const friend2 = ["Rodrigo", 46, "developer", "carpentry", "bball"];
console.log(friend2);
for (let key in friend2) {
  console.log(key, friend2[key]);
}
const friend = {
  name: "Erika",
  age: 49,
  job: "teacher",
  hobbies: ["bike-riding", "thrift-shopping", "exotic food"],
};
console.log(friend);

for (let key in friend) {
  console.log(key, friend[key]);
}
