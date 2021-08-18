const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

// A Jane deve ter 2 hobbies ou 4? Ambiguo, na dúvida fiz os dois
//Opção com 2 hobbies =>Só 'desComentar'
// const jane = {
//   ...john,
//   hobbies: ['MuayThai', 'Programming']
// }

//Opção com 4 hobies
const jane = {
  ...john,
   hobbies: [...john.hobbies, 'MuayThai', 'Programming']
}
////meu comentário => os 3 pontos é o spread.. entao ele aproveita tudo do john. Após ele eu posso modificar no novo objeto(jane)
////meu comentário => colocar entre colchetes    hobbies: [...john.hobbies, 'MuayThai', 'Programming'] é a DESESTRUTURAÇÃO

jane.name = 'Jane'

console.log('John:', john)
console.log('Jane:', jane)


