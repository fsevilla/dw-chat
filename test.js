
const person = {
  name: 'John',
  email: 'john@example.com',
  password: 'Hello123'
}

const { ...clonedPerson } = person;

const clonedPerson2 = { ...person }

const numbers = [1,2,3,4]

const clonedNumbers = [...numbers]