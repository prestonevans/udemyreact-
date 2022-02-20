import ReactDOM from 'react-dom';
import './index.css'

const users = [
	{
		id: 1,
		name: 'Jack Bauer',
		email: 'jack.bauer@ctu.gov',
		phone: '+358509283928'
	},
	{
		id: 2,
		name: 'Tony Almeida',
		email: 'tony.almeida@ctu.gov',
		phone: '+358508829378'
	},
	{
		id: 3,
		name: "Chloe O'brian asdfesfssdfleflsdflllkjljljlk",
		email: 'chloe.obrian@ctu.gov',
		phone: '+358508899012'
	}
];

function List() {
	return (
		<>
			{users.map((user) => (
				<section className='user' key={user.id}>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
					<p>{user.phone}</p>
				</section>
			))}
		</>
	);
}

ReactDOM.render(<List />, document.querySelector('#root'));
