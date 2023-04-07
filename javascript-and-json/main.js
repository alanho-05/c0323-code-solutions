const booksArray = [
  {
    isnb: '978-1118531648',
    title: 'JavaScript and jQuery Interactive Front-End Web Development',
    author: 'Jon Duckett'
  },
  {
    isnb: '978-1118008188',
    title: 'HTML and CSS: Design and Build Websites',
    author: 'Jon Duckett'
  },
  {
    isnb: '978-1476753836',
    title: 'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking',
    author: 'Samin Nosrat'
  }
];

console.log('array of books:', booksArray);
console.log('typeof for array of books:', typeof booksArray);

const jsonArray = JSON.stringify(booksArray);

console.log('JSON stringify:', jsonArray);
console.log('typeof jsonArray:', typeof jsonArray);

const jsonStudent = '{"id":11583,"student":"Robert"}';
console.log('json student:', jsonStudent);
console.log('typeof for json student:', typeof jsonStudent);

const parsedStudent = JSON.parse(jsonStudent);
console.log('parsed Student:', parsedStudent);
console.log('typeof for parsedStudent:', typeof parsedStudent);
