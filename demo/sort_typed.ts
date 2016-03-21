interface ISortable {
  name: string;
}

let sortable: ISortable[] = [
  { name: "Marvin" },
  { name: "Arthur Dent" },
  { name: "Heart of Gold" },
  { name: "Ford Prefect" },
];

function sortByNameTyped(list: ISortable[]): ISortable[] {

  let dummy: ISortable[] = list.slice(0);

  dummy.sort((a: ISortable, b: ISortable): number => {
    return a.name.localeCompare(b.name);
  });

  return dummy;
}

console.log(sortable);
console.log("");
console.log(sortByNameTyped(sortable));
