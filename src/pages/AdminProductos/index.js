import React, { useState } from 'react'
import firebase from '../../config/Firebase'
import { useHistory } from 'react-router-dom'

function AdminProductos() {
	const history = useHistory()
	const [datos, setDatos] = useState({
		nombre: '',
		descripcion: '',
		imagen: '',
		precio: '',
		stock: '',
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
		console.log(datos)
		firebase.db
			.collection('productos')
			.add(datos)
			.then(doc => {
				console.log(doc)
				alert('Producto agregado!')
				history.push('/tienda')
			})
		e.preventDefault()
	}

	return (
		<section class='wrapper-form'>
			<h4>Agregar Producto</h4>
			<form id='add-producto' onSubmit={handleSubmit}>
				<div class='data'>
					<label for='nombre'>Nombre*</label>
					<input
						type='text'
						placeholder='Nombre'
						name='nombre'
						value={datos.nombre}
						onChange={handleChange}
						required
					/>
				</div>

				<div class='data'>
					<label for='descripcion'>Descripción*</label>
					<input
						type='text'
						placeholder='Descripción'
						name='descripcion'
						value={datos.descripcion}
						onChange={handleChange}
						required
					/>
				</div>

				<div class='data'>
					<label for='imagen'>Imagen URL*</label>
					<input
						type='text'
						placeholder='URL de la imagen'
						name='imagen'
						value={datos.imagen}
						onChange={handleChange}
						required
					/>
				</div>

				<div class='data'>
					<label for='precio'>Precio*</label>
					<input
						type='number'
						placeholder='Precio'
						name='precio'
						value={datos.precio}
						onChange={handleChange}
						required
					/>
				</div>

				<div class='data'>
					<label for='stock'>Stock*</label>
					<input
						type='number'
						placeholder='Stock'
						name='stock'
						value={datos.stock}
						onChange={handleChange}
						required
					/>
				</div>

				<button type='submit'>Añadir Producto</button>
			</form>
		</section>
	)
}

export default AdminProductos
