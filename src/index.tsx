import ReactDOM from 'react-dom';
import './index.css';

function List() {
	return (
		<div className="card">
			<img src="https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL.jpg" alt="Atomic Habits" />
			<a href="#">Atomic Habits</a>
			<a href="#">
				<span>James Clear</span>
			</a>
			<span>Rating: 3</span>
			<span>$4.99</span>
			<span className="rank"># 1</span>
		</div>
	);
}

ReactDOM.render(<List />, document.querySelector('#root'));
