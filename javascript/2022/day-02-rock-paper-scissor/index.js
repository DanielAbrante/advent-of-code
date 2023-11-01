// Opponent Options
// A - Rock
// B - Paper
// C - Scissor

// Player Options
// X - Rock (1)
// Y - Paper (2)
// Z - Scissor (3)

// Round Score
// Win - 6
// Draw - 3
// Lose - 0

const { readFileSync } = require("fs")

const puzzle_input = __dirname.concat("/input.txt");
let file_content = "";
let total_score = 0;

try {
  file_content = readFileSync(puzzle_input, 'utf-8');
} catch (error) {
  throw (new Error("Não foi possível abrir o arquivo de input"));
}

const all_rounds = file_content.split('\n');

all_rounds.forEach(round => {
  checkRound(round)
});

function checkRound(round) {
  const opponent = round[0];
  const player = round[2];

  if (opponent === "A" && player === "Y") {
    total_score += 8;
  } else if (opponent === "A" && player === "Z") {
    total_score += 3;
  } else if (opponent === "B" && player === "X") {
    total_score += 1;
  } else if (opponent === "B" && player === "Z") {
    total_score += 9;
  } else if (opponent === "C" && player === "X") {
    total_score += 7;
  } else if (opponent === "C" && player === "Y") {
    total_score += 2
  } else if (opponent === "A" && player === "X") {
    total_score += 4;
  } else if (opponent === "B" && player === "Y") {
    total_score += 5;
  } else if (opponent === "C" && player === "Z") {
    total_score += 6;
  }

}

console.log(total_score);