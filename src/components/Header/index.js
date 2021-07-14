import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let items = this.props.items
		return (
			<header className='header'>
				<div class='wrapper'>
					<span class='logo-text'>
						<NavLink to='/'>TECNOSHOP</NavLink>
					</span>
					<nav>
						<ul className='menu'>
							{this.props.items.map(link => (
								<li>
									<NavLink to={link.path} activeClassName='selected'>
										{link.item}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header
