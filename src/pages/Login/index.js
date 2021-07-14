import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../config/Firebase'

function Login() {
	const history = useHistory()
	const [datos, setDatos] = useState({ email: '', password: '' })
	const handleChange = e => {
		const target = e.target
		const value = target.value
		const nombre = target.name

		setDatos({
			...datos,
			[nombre]: value,
		})
	}

	const handleLogin = e => {
		firebase.auth
			.signInWithEmailAndPassword(datos.email, datos.password)
			.then(data => {
				console.log(data)
				alert('Bienvenido!')
				history.push('/')
			})
			.catch(error => {
				console.log(error)
			})
		e.stopPropagation()
		e.preventDefault()
	}

	return (
		<section class='wrapper-form'>
			<h3>Ingresá a la Tienda con tu Usuario y Contraseña</h3>
			<form id='login' onSubmit={handleLogin}>
				<div class='data'>
					<label for='email'>Email*</label>
					<input
						type='email'
						required
						name='email'
						value={datos.email}
						onChange={handleChange}
					/>
				</div>

				<div class='data'>
					<label for='password'>Password*</label>
					<input
						type='password'
						required
						name='password'
						value={datos.password}
						onChange={handleChange}
					/>
				</div>

				<button type='submit'>Ingresar</button>
			</form>
		</section>
	)
}

export default Login
