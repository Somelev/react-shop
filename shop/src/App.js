import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 1,
					title: 'Стул серый',
					img: 'chair_grey.jpg',
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
					img: 'lamp.jpg',
					desc: 'lorem ipsum dolor akwfjawf awkfahwfk',
					category: 'light',
					price: '25.00',
				},
				{
					id: 5,
					title: 'Стул белый',
					img: 'chair_white.jpg',
					desc: 'lorem ipsum awkfahwfk',
					category: 'chairs',
					price: '39.99',
				},
			],
		};
	}
	render() {
		return (
			<div className="wrapper">
				<Header />
				<Items items={this.state.items} />
				<Footer />
			</div>
		);
	}
}

export default App;
