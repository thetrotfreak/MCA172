function game() {
  const system_guess = Math.floor(Math.random() * 9 + 1);
  const user_guess = parseInt(prompt("Your guess (between 1 and 10)"), 10);
  if (user_guess == system_guess) alert("Good work");
  else alert("Not matched");
}
