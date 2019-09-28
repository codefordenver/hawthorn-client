import React from 'react';
import './App.css';

class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: "Who are you?",
      posts: ["I am Bert. Hello!", "Who wants to know?", "Pooh!"],
    };
  }

  render() {
    return (
      <div>
        <Prompt title={this.state.prompt} />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

function Prompt(props) {
  return (
    <h1>{props.title}</h1>
  )
}

function PostList(props) {
  const posts = props.posts;
  const listItems = posts.map((post) =>
    <Post body={post} />
  );
  return (
    <ul>{listItems}</ul>
  );
}

function Post(props) {
  return (
    <li key={props.body}>
      <img src="https://i.pravatar.cc/25" alt="Avatar" id="avatar"/>
      <span id="post-body">{props.body}</span>
    </li>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Conversation />
      </header>
    </div>
  );
}

export default App;
