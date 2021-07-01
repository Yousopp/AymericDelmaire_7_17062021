import React, { Suspense } from 'react';

const Avatar = React.lazy(() => import('./components/Avatar'));

function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  function Application() {
    return (
      <div class="container-post">
        <div class="container-post__comment">
          <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
          />
        </div>
        <div class="container-post__comment">
          <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
          />
        </div>
        <div class="container-post__comment">
          <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
          />
        </div>
      </div>
    );
  }
  
  ReactDOM.render(
    <Application />,
    document.getElementById('root')
  );