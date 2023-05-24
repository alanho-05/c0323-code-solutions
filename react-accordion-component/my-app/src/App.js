import Accordion from './Accordion';

const languages = [
  {
    topic: 'Hypertext Markup Language',
    detail:
      'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technoloaies for the World Wide Web.',
  },
  {
    topic: 'Cascading Style Sheets',
    detail:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web. alonaside HTML and JavaScript.',
  },
  {
    topic: 'JavaScript',
    detail:
      'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation. and first-class functions.',
  },
];

function App() {
  return (
    <div>
      <Accordion topic={languages} />
    </div>
  );
}

export default App;
