const spinCharacters = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let count = 0;

for (const char of spinCharacters) {
  if (count === spinCharacters.length -1) {
    setTimeout(() => {
      console.log();
    }, (count+1) * 200)
  };
  setTimeout(() => {
  process.stdout.write(`\r${char}   `);
  }, count*200);
  count++
};
