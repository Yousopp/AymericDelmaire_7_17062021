import React from "react";
import Comment from "./Comment"

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

function Home() {

    return(
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
    );
}

export default Home;