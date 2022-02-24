import ReactDOM from 'react-dom';
import { Book } from './components/books/books';
import './index.css';
import {bookList as test} from './data/data'


function List() {
	return (
		<section>
			{test.map((book, i) => {
				return (
					<Book {...book} key={`${book.rank}${i}`}/>
				);
			})}
		</section>
	);
}

ReactDOM.render(<List />, document.querySelector('#root'));
