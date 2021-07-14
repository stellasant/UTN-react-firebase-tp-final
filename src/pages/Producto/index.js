import React, { useState, useEffect } from 'react'
import Titulo from '../../components/Titulo'
import Mensaje from '../../components/Mensaje'
import firebase from '../../config/Firebase'
import './style.css'

function Producto(props) {
	const [producto, setProducto] = useState({ producto: [] })
	const [mensaje, setMensaje] = useState({ mensaje: '' })

	useEffect(() => {
		/* fetch(`https://jsonfy.com/items/${props.match.params.id}`)
			.then(respuesta => respuesta.json())
			.then(dataProducto => {
				setProducto({ ...producto, producto: dataProducto[0] })
			})
			.catch(error => {
				console.log(error)
			}) */
		firebase.db
			.doc('productos/' + props.match.params.id)
			.get()
			.then(doc => {
				setProducto({ ...producto, producto: doc.data() })
			})
	})

	const handleClick = () => {
		setMensaje({ compraOk: <h4>¡Gracias por tu compra!</h4> })
	}

	return (
		<>
			<Titulo nombre={producto.producto.nombre} />

			<section className='producto-detalle'>
				<img
					src={producto.producto.imagen}
					alt={producto.producto.nombre}
					className='image-detalle'
				/>
				<div className='detalle'>
					<div className='item'>
						<h5>Detalle</h5>
						<p>{producto.producto.descripcion}</p>
					</div>

					<div className='item'>
						<h5>Cantidad</h5>
						<p>{producto.producto.stock}</p>
					</div>

					<div className='item'>
						<h5>SKU</h5>
						<p>{producto.producto.id}</p>
					</div>

					<div className='item'>
						<h4>Precio</h4>
						<p className='price'>{'$ ' + producto.producto.precio}</p>
					</div>

					<button className='button-compra' onClick={handleClick}>
						Comprar
					</button>
				</div>
			</section>

			<Mensaje mensaje={mensaje.compraOk} />
		</>
	)
}
export default Producto
