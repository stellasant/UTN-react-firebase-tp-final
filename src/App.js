import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home/index'
import Producto from './pages/Producto/index'
import Login from './pages/Login/index'
import Registro from './pages/Registro/index'
import { Switch, Route } from 'react-router-dom'
import AdminProductos from './pages/AdminProductos'
import EditarProducto from './pages/EditarProducto'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { mensaje: '' }
	}

	handleOnClick = () => {
		this.setState({
			mensaje: <h4>¡Gracias por tu compra!</h4>,
		})
	}

	render() {
		let menuLinks = [
			{
				item: 'Home',
				path: '/',
				component: Home,
			},
			{
				item: 'ABM Productos',
				path: '/abm-productos',
				component: AdminProductos,
			},
			{
				item: 'Login',
				path: '/login',
				component: Login,
			},
			{
				item: 'Registro',
				path: '/registro',
				component: Registro,
			},
		]

		let linksNoMenu = [
			{
				item: 'Producto',
				path: '/producto/:id',
				component: Producto,
			},
			{
				item: 'Editar Producto',
				path: '/editar-producto/:id',
				component: EditarProducto,
			},
		]

		return (
			<div className='App'>
				<div className='container'>
					<Header items={menuLinks} />

					<main className='main'>
						<Switch>
							{menuLinks.map((link, index) => (
								<Route key={index} path={link.path} component={link.component} exact />
							))}
							{linksNoMenu.map((otherLink, index) => (
								<Route
									key={index}
									path={otherLink.path}
									component={otherLink.component}
									exact
								/>
							))}
							{/* <Route path={menuLinks[0].path} component={Home} exact />
							<Route path={menuLinks[1].path} component={Tienda} exact />
							<Route path={menuLinks[2].path} component={Producto} exact />
							<Route path={menuLinks[3].path} component={AdminProductos} exact />
							<Route path={menuLinks[4].path} component={EditarProducto} exact />
							<Route path={menuLinks[5].path} component={Login} exact />
							<Route path={menuLinks[6].path} component={Registro} exact /> */}
						</Switch>
					</main>
				</div>
				<footer>TECNOSHOP - 2020</footer>
			</div>
		)
	}
}

export default App
