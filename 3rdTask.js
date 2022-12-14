const initialArray = [2, 4];
const listOfUsers = [
  {
    id: 1,
    name: "John",
  },

  {
    id: 2,
    name: "Alex",
  },

  {
    id: 3,
    name: "Petr",
  },

  {
    id: 4,
    name: "Emmanuel",
  },
];

const newListOfUsers = (users, ids) => {
  return listOfUsers.filter((user) => !ids.includes(user.id));
};

console.log(newListOfUsers(listOfUsers, initialArray));
