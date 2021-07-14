import React from 'react'
import './style.css'

class Mensaje extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <span className='mensaje'>{this.props.mensaje}</span>
	}
}
export default Mensaje
