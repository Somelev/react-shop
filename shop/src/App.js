import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [],
			items: [
				{
					id: 1,
					title: 'Стул серый',
					img: 'chair_grey_1.jpg',
					desc: 'lorem ipsum dolor',
					category: 'chairs',
					price: '49.99',
				},
				{
					id: 2,
					title: 'Стол',
					img: 'table.jpg',
					desc: 'lorem ipsum dolor,sit amet',
					category: 'tables',
					price: '149.00',
				},
				{
					id: 3,
					title: 'Диван',
					img: 'sofa.jpg',
					desc: 'lorem ipsum dolor akfhhwh awfihawfli akwfjawf awkfahwfk',
					category: 'sofa',
					price: '549.99',
				},
				{
					id: 4,
					title: 'Лампа',
					img: 'lamp_2.jpg',
					desc: 'lorem ipsum dolor akwfjawf awkfahwfk',
					category: 'light',
					price: '25.00',
				},
				{
					id: 5,
					title: 'Стул белый',
					img: 'chair_white_1.jpg',
					desc: 'lorem ipsum awkfahwfk',
					category: 'chairs',
					price: '39.99',
				},
			],
		};
		this.addToOrder = this.addToOrder.bind(this);
	}
	render() {
		return (
			<div className="wrapper">
				<Header orders={this.state.orders} />
				<Items items={this.state.items} onAdd={this.addToOrder} />
				<Footer />
			</div>
		);
	}
	addToOrder(item) {
		let isInArray = false;
		this.state.orders.forEach((el) => {
			if (el.id === item.id) {
				isInArray = true;
			}
		});
		if (!isInArray) {
			this.setState({ orders: [...this.state.orders, item] });
		}
	}
}

export default App;
