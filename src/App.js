import React from 'react';
import './App.css';

class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [
        {
          prompt: "Who are you?",
          responses: ["I am Bert. Hello!", "Who wants to know?", "Pooh!"],
        }
      ],
    };
    this.handlePromptSubmit = this.handlePromptSubmit.bind(this);
    this.handleResponseSubmit = this.handleResponseSubmit.bind(this);
  }

  handlePromptSubmit(body) {
    // TODO - POST new prompt to API
    this.setState({conversations: this.state.conversations.concat(
      {
        prompt: body,
        responses: [],
      }
    )});
  }

  handleResponseSubmit(body) {
    // TODO - Add the post to this.state.conversations for this conversation
    // TODO - POST new post to API
    alert(body);
  }

  render() {
    let conversationList = this.state.conversations.map((conversation) =>
      <li>
        <Prompt body={conversation.prompt} />
        <ul>
          {conversation.responses.map((response) =>
            <Post body={response}/>
          )}
        </ul>
        <EssayForm title="response" handleSubmit={this.handleResponseSubmit}/>
      </li>
    );

    return (
      <div>
        <EssayForm title="prompt" handleSubmit={this.handlePromptSubmit}/>
        <hr/>
        <ul>
          {conversationList}
        </ul>
      </div>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Create a new {this.props.title}:
          <textarea  onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function Prompt(props) {
  return (
    <h1>{props.body}</h1>
  )
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
