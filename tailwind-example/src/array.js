const names = ['Luiz Felipe', 'Daniel', 'Danilo', 'Damares', 'Daniela', 'Thaissa']

const dNames = names
.filter(name => name.startsWith('D'))
.map(dPerson => dPerson.toUpperCase())

console.log(dNames)