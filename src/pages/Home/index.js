import React, { useState, useEffect } from 'react'
import Productos from '../../components/Productos'
import firebase from '../../config/Firebase'
import SlideHome from '../../images/slide-home.jpg'
import Tienda from '../../images/tienda.svg'
import Envios from '../../images/envios.svg'
import Ayuda from '../../images/ayuda.svg'
import './style.css'

function Home() {
	const [productos, setProductos] = useState({ productos: [] })

	useEffect(() => {
		/* fetch('https://jsonfy.com/items')
			.then(respuesta => respuesta.json())
			.then(dataProducto => {
				setProductos({ ...productos, productos: dataProducto })
			})
			.catch(error => {
				console.log(error)
			}) */

		firebase.db
			.collection('productos')
			.get()
			.then(querySnapshot => {
				console.log('query', querySnapshot.docs)
				setProductos({ ...productos, productos: querySnapshot.docs })
			})
	}, [])

	return (
		<>
			<section className='slider'>
				<img src={SlideHome} />
			</section>
			<section className='info'>
				<div className='info-item'>
					<img src={Envios} />
					<p>Envíos a todo el país</p>
				</div>
				<div className='info-item'>
					<img src={Tienda} />
					<p>Retirá en sucursal</p>
				</div>
				<div className='info-item'>
					<img src={Ayuda} />
					<p>¿Necesitás ayuda? Contactanos!</p>
				</div>
			</section>
			<section className='grid'>
				{productos.productos.map(productos => (
					<Productos id={productos.id} data={productos.data()} />
				))}
			</section>
		</>
	)
}
export default Home
