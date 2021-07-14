import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Productos(props) {
	return (
		<article className='card-producto' key={props.id}>
			<img src={props.data.imagen} alt={props.data.nombre} className='image' />
			<h3>{props.data.nombre}</h3>
			<p className='description'>{props.data.descripcion}</p>
			<h4 className='price'>{'$ ' + props.data.precio}</h4>
			<Link to={'/producto/' + props.id} exact className='ver-mas'>
				<button className='button-detalle'>Ver más</button>
			</Link>
			<Link to={'/editar-producto/' + props.id} exact className='ver-mas'>
				<button className='button-detalle'>Editar Producto</button>
			</Link>
		</article>
	)
}

export default Productos
