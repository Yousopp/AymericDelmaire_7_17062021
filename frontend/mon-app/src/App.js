import logo from './icon-left-font-monochrome-white.png';
import './App.css';
import Comment from './conponents/Comment';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-body">
        <div className="App-comment">
          <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author}
          />
        </div>
        <div className="App-comment">
          <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author}
          />
        </div>
        <div className="App-comment">
          <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author}
          />
        </div>
      </div>
      <div className="App-connexion">
        <div>
          <p>Se connecter</p>
          <p>S'inscrire</p>
        </div>
        <div className="App-groupotter">
          <p>Groupotter</p>
        </div>
      </div>
    </div>
  );
}

export default App;
