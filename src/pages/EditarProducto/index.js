import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../config/Firebase'

function EditarProducto(props) {
	const history = useHistory()
	const [producto, setProducto] = useState({
		nombre: '',
		descripcion: '',
		imagen: '',
		precio: '',
		stock: '',
	})

	useEffect(() => {
		firebase.db
			.doc('productos/' + props.match.params.id)
			.get()
			.then(doc => {
				setProducto(doc.data())
				console.log(doc.data())
			})
	}, [])

	const handleChange = e => {
		const target = e.target
		const value = target.value
		const name = target.name

		setProducto({
			...producto,
			[name]: value,
		})
	}

	const handleSubmit = e => {
		console.log(producto)
		e.preventDefault()
		firebase.db
			.doc('productos/' + props.match.params.id)
			.set(
				{
					nombre: producto.nombre,
					descripcion: producto.descripcion,
					imagen: producto.imagen,
					precio: producto.precio,
					stock: producto.stock,
				},
				{ merge: true }
			)
			.then(doc => {
				alert('Cambios guardados!')
				console.log(doc)
				history.push('/tienda')
			})
	}

	const handleDelete = e => {
		console.log(producto)
		e.preventDefault()
		firebase.db
			.doc('productos/' + props.match.params.id)
			.delete()
			.then(doc => {
				alert('Producto eliminado!')
				console.log(doc)
				history.push('/tienda')
			})
	}

	return (
		<section class='wrapper-form'>
			<h4>Editar Producto</h4>

			<section class='wrapper-form'>
				<form id='edit-producto' onSubmit={handleSubmit}>
					<div class='data'>
						<label for='nombre'>Nombre*</label>
						<input
							type='text'
							placeholder='Nombre'
							name='nombre'
							value={producto.nombre}
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
							value={producto.descripcion}
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
							value={producto.imagen}
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
							value={producto.precio}
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
							value={producto.stock}
							onChange={handleChange}
							required
						/>
					</div>

					<button type='submit'>Guardar cambios</button>
					<Link to={'/abm-productos'}>
						<button type='submit' onClick={handleDelete} value='Eliminar'>
							Eliminar
						</button>
					</Link>
				</form>
			</section>
		</section>
	)
}

export default EditarProducto
