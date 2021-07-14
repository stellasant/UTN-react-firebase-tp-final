import * as firebase from 'firebase'

var firebaseConfig = {
	apiKey: 'AIzaSyBpwl_p0g2iW1qe8M9c3B1sR7exfH_GOtI',
	authDomain: 'tienda-react-85043.firebaseapp.com',
	databaseURL: 'https://tienda-react-85043.firebaseio.com',
	projectId: 'tienda-react-85043',
	storageBucket: 'tienda-react-85043.appspot.com',
	messagingSenderId: '216063168785',
	appId: '1:216063168785:web:b66659ca81d00daa93fcb0',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
db.settings({
	timestampsInSnapshots: true,
})
firebase.db = db
firebase.auth = firebase.auth()

/* var productos = [
	{
		id: 1,
		nombre: 'MSI B450-A PRO MAX',
		descripcion:
			'MSI motherboards have tons of convenient and smart design features, such as convenient pin-header keep out zone, friendly SATA & USB location and so on, so DIY users can pick and choose any gaming rig they want.\r\nExcellent cooling\r\nEnhanced performance',
		imagen:
			'https://www.computeruniverse.net/images/900/90778117B4978AB721BD454FAAB0426A.jpg',
		precio: 50.999,
		stock: 5,
	},
	{
		id: 2,
		nombre: 'HP ProBook 455R G6 9VX50ES R3-3200U 8GB/256GB SSD 15',
		descripcion:
			'39.6 cm (15.6") Notebook, Windows 10 Pro\r\nDisplay: 1920 x 1080, IPS, matt\r\nAMD Ryzen™ 3 3200U 2x 2.60 GHz\r\nAMD Radeon™ Vega 3 Mobile Shared Memory\r\n8 GB RAM, 256 GB SSD\r\n1x USB 3.1 Gen1 Typ C, 2x USB 3.1 Gen1, Wi-Fi 5 (802.11ac)',
		imagen:
			'https://www.computeruniverse.net/images/700/907885464961E3AB58B84D1F95B7A699.jpg',
		precio: 59.999,
		stock: 5,
	},
	{
		id: 3,
		nombre: 'Microsoft Office 2019 Home & Business ',
		descripcion:
			'Windows, Mac OS\r\nStandard -Full Version\r\nserial number without disc (PKC)\r\nNo. of licenses: 1',
		imagen:
			'https://www.computeruniverse.net/images/900/9073975798A63B4299464B11AED499C3.jpg',
		precio: 50.999,
		stock: 5,
	},
	{
		id: 4,
		nombre: 'MSI B450-A PRO MAX 2',
		descripcion:
			'MSI motherboards have tons of convenient and smart design features, such as convenient pin-header keep out zone, friendly SATA & USB location and so on, so DIY users can pick and choose any gaming rig they want.\r\nExcellent cooling\r\nEnhanced performance',
		imagen:
			'https://www.computeruniverse.net/images/900/90778117B4978AB721BD454FAAB0426A.jpg',
		precio: 50.999,
		stock: 5,
	},
	{
		id: 5,
		nombre: 'HP ProBook 455R G6 9VX50ES R3-3200U 8GB/256GB SSD 15 2',
		descripcion:
			'39.6 cm (15.6") Notebook, Windows 10 Pro\r\nDisplay: 1920 x 1080, IPS, matt\r\nAMD Ryzen™ 3 3200U 2x 2.60 GHz\r\nAMD Radeon™ Vega 3 Mobile Shared Memory\r\n8 GB RAM, 256 GB SSD\r\n1x USB 3.1 Gen1 Typ C, 2x USB 3.1 Gen1, Wi-Fi 5 (802.11ac)',
		imagen:
			'https://www.computeruniverse.net/images/700/907885464961E3AB58B84D1F95B7A699.jpg',
		precio: 59.999,
		stock: 5,
	},
	{
		id: 6,
		nombre: 'Microsoft Office 2019 Home & Business 2',
		descripcion:
			'Windows, Mac OS\r\nStandard -Full Version\r\nserial number without disc (PKC)\r\nNo. of licenses: 1',
		imagen:
			'https://www.computeruniverse.net/images/900/9073975798A63B4299464B11AED499C3.jpg',
		precio: 50.999,
		stock: 5,
	},
]

productos.forEach(function (obj) {
	db
		.collection('productos')
		.add({
			id: obj.id,
			nombre: obj.nombre,
			descripcion: obj.descripcion,
			imagen: obj.imagen,
			precio: obj.precio,
			stock: obj.stock,
		})
		.then(function (docRef) {
			console.log('Document written with ID: ', docRef.id)
		})
		.catch(function (error) {
			console.error('Error adding document: ', error)
		})
}) */

export default firebase
