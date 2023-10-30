const { readFileSync } = require("fs")

const file_path = __dirname.concat("/input.txt");
let calories_list_to_each_elve = [];

try {
  const file_content = readFileSync(file_path, 'utf-8');
  calories_list_to_each_elve = file_content.split('\n\n');

} catch (error) {
  throw (new Error("Não foi possível abrir o arquivo de input"));
}

let greaterCalorie = 0;

calories_list_to_each_elve.forEach(calorie_set => {
  const calorie_item = calorie_set.split('\n');

  const subTotalCalorie = calorie_item.reduce((accumulator, calorie) => accumulator + parseInt(calorie), 0);

  if (subTotalCalorie > greaterCalorie) {
    greaterCalorie = subTotalCalorie
  }
});

console.log(greaterCalorie);

