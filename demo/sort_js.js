
var tobesorted = [
  { name: "Marvin" },
  { name: "Arthur Dent" },
  { name: "Heart of Gold" },
  { name: "Ford Prefect" }
];

function sortByName(list) {

  var dummy = list.slice(0);

  dummy.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  return dummy;
}

console.log(tobesorted);
console.log("");
console.log(sortByName(tobesorted));
