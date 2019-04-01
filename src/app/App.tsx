import React, { Component } from 'react'
import { History } from 'history'
import logo from './logo.svg'
import './App.css'

interface Props {
	history: History
}

class App extends Component<Props> {
	render() {
		console.log(this.props)
		const { history: { push } } = this.props
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</header>
				<div onClick={() => push('/first')}>First</div>
				<div onClick={() => push('/second')}>Second</div>
			</div>
		)
	}
}

export default App
