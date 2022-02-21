import './books.css'

export function Book() {
    return (
        <div className="card">
			<img src="https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL.jpg" alt="Atomic Habits" />
			<a href="#">Atomic Habits</a>
			<a href="#">
				<span>James Clear</span>
			</a>
			<span>Rating: 3</span>
			<span>$4.99</span>
			<span className="rank"></span>
			<span className='rank-value'>#11</span>
		</div>
    )
}