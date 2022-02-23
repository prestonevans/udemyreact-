import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Book } from './components/books/books';
import './index.css';

const bookList = [
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL.jpg',
		title: 'Atomic Habits',
		author: 'James Clear',
		rating: '3',
		price: '3.99',
		rank: '11'
	},
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL.jpg',
		title: 'Atomic Something',
		author: 'Preston Jay',
		rating: '5',
		price: '20',
		rank: '15'
	},
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL.jpg',
		title: 'Atomic Habits',
		author: 'James Clear',
		rating: '3',
		price: '3.99',
		rank: '11'
	},
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL.jpg',
		title: 'Atomic Habits',
		author: 'James Clear',
		rating: '3',
		price: '3.99',
		rank: '11'
	},
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL.jpg',
		title: 'Atomic Habits',
		author: 'James Clear',
		rating: '3',
		price: '3.99',
		rank: '11'
	}
];

function List() {
	return (
		<section>
			{bookList.map((book, i) => {
				return (
					<Book {...book} key={`${book.rank}${i}`}/>
				);
			})}
		</section>
	);
}

// function List() {
// 	const [tooltip, setTooltip] = useState(false)

// 	function onFocusNameHandler() {
// 		setTooltip(!tooltip)
// 	}
// 	return (
// 		<main>
// 			<span className={tooltip ? 'show' : 'hide'}>Here is a tooltip</span>
// 			<input onBlur={onFocusNameHandler} onFocus={onFocusNameHandler} type="text" />
// 		</main>
// 	)
// }

ReactDOM.render(<List />, document.querySelector('#root'));
