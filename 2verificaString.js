function verificaLetraA(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'A') {
          count++;
      }
  }

  if (count > 0) {
      console.log(`Aparece ${count} vezes`);
  } else {
      console.log(`Não tem A`);
  }
}

const string = "TestANDO QUANtas vezes a letra A aparece";
verificaLetraA(string);
