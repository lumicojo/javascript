const students = ['Bruno A', 'Ty B', 'Jonathan B', 'Lumi C', 'Mariia H', 'Alexander J', 'Adam Kabak', 'Adam Khodier', 'William K', 'Grace K', 'Matthew L', 'Salman M', 'Max M', 'Nicholas P', 'Trevor P', 'Soren S', 'Paige T', 'Naz W']

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const randomStudents = shuffle(students)

let groups = [], j = 0, n = randomStudents.length; 

while (j < n) {
    groups.push(randomStudents.slice(j, j += 3))
}

project groups: 
1: ['Nicholas P', 'Lumi C', 'Adam Kabak']

2: ['Trevor P', 'Mariia H', 'Jonathan B']

3: ['Bruno A', 'Ty B', 'Naz W']

4: ['Paige T', 'Adam Khodier', 'Max M']

5: ['William K', 'Grace K', 'Alexander J']

6: ['Soren S', 'Matthew L', 'Salman M']