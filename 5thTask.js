const users = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
  {
    id: 3,
    first_name: "Max",
    last_name: "Olster",
    email: "gfr@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
  {
    id: 4,
    first_name: "Alice",
    last_name: "Niklson",
    email: "gfrediani1@senate.gov",
    gender: "Female",
    ip_address: "229.179.4.212",
  },
];

const isMaleOrFemale = (userList) => {
  return userList.reduce(
    (result, user) => {
      const { first_name, last_name, ...newUser } = user;
      const fullName = `${first_name} ${last_name}`;
      newUser.full_name = fullName;
      const genderIdentifier = newUser.gender === "Female" ? "women" : "men";
      result[genderIdentifier].push(newUser);
      return result;
    },
    { men: [], women: [] }
  );
};
console.log(isMaleOrFemale(users));
