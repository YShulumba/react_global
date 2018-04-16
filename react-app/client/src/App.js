import React, { Component, PureComponent } from 'react';
import './App.css';

class App extends Component {
	state = {
		response: ''
	};

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/hello');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};
	
	constructor() {
		super()
		this.state = { messages: [] }

		// binds
		this._getLastMessage = this._getLastMessage.bind(this)
		this._onMessageChange = this._onMessageChange.bind(this)
	}

	_getLastMessage() {
		const lastMessage = this.state.messages[this.state.messages.length - 1]
		return lastMessage === undefined ? '' : lastMessage
	}

	_onMessageChange(event) {
		const messages = [...this.state.messages]
		messages.push(event.target.value)
		this.setState({ messages })
	}

	render() {
		return (
			<div className='App'>
				<h3>{this.state.response}</h3>
				<input
					type='text'
					value={this._getLastMessage()}
					onChange={this._onMessageChange}
					placeholder='Type smth (here used Component and PureComponent)'
					className='textField'
				/>
				<MessageList messages={this.state.messages} />
			</div>
		)
	}
}

class MessageList extends Component {
	render() {
		return (
			<ul className='list'>
				{this.props.messages.map((m, i) => <Message key={i} message={m} />)}
			</ul>
		)
	}
}

class Message extends PureComponent {
	render() {
		return <li className='list__item'> {this.props.message} </li>
	}
}

export default App;