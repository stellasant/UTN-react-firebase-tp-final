import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import firebase from '../../config/Firebase'
import './style.css'

function Registro() {
	const history = useHistory()
	const [datos, setDatos] = useState({
		nombre: '',
		apellido: '',
		email: '',
		password1: '',
		password: '',
	})
	const handleChange = e => {
		const target = e.target
		const value = target.value
		const nombre = target.name

		setDatos({
			...datos,
			[nombre]: value,
		})
	}

	const handleSubmit = e => {
		let email = datos.email
		let password = datos.password
		firebase.auth
			.createUserWithEmailAndPassword(email, password)
			.then(data => {
				console.log('Usuario creado', data.user.uid)
				firebase.db
					.collection('usuarios')
					.add({
						nombre: datos.nombre,
						apellido: datos.apellido,
						email: datos.email,
						password: datos.password,
						userId: data.user.uid,
					})
					.then(data => {
						console.log(data)
						alert('Usuario registrado!')
						history.push('/login')
					})
					.catch(err => {
						console.log(err)
						alert('Error!')
					})
			})
			.catch(error => {
				console.log('Error', error)
				alert('Error!')
			})
		e.preventDefault()
	}

	return (
		<section class='wrapper-form'>
			<h3>Completá tus datos para registrarte</h3>
			<form action='get' id='contact' onSubmit={handleSubmit}>
				<div class='data'>
					<label for='nombre'>Nombre*</label>
					<input
						type='text'
						required
						name='nombre'
						value={datos.nombre}
						onChange={handleChange}
					/>
				</div>
				<div class='data'>
					<label for='apellido'>Apellido*</label>
					<input
						type='text'
						required
						name='apellido'
						value={datos.apellido}
						onChange={handleChange}
					/>
				</div>

				<div class='data'>
					<label for='email'>e-mail*</label>
					<input
						type='email'
						required
						placeholder='ejemplo@ejemplo.com'
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
				<button type='submit'>¡Registrarme!</button>
				<Link to={'/login'}>Ya tengo cuenta. Iniciar Sesión</Link>
			</form>
		</section>
	)
}

export default Registro
