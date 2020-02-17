let john = {name: 'John', surname: 'Smith', id: 1};
let pete = {name: 'Pete', surname: 'Hunt', id: 2};
let mary = {name: 'Mary', surname: 'Key', id: 3};

let users = [john, pete, mary];

let usersMapped = users.map(function(item) {
  return {
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
  };
});

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
console.log(usersMapped);

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith