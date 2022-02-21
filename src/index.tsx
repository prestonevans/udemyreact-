import ReactDOM from 'react-dom';
import { Book } from './components/books/books';
import './index.css';

function List() {
	return (
		<section>
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

ReactDOM.render(<List />, document.querySelector('#root'));
