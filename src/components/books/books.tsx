import { ReactNode } from 'react'
import './books.css'

type BookProps = {
	children?: ReactNode;
	img: string;
	title: string;
	author: string;
	rating: string;
	price: string;
	rank: string;
}

export function Book({
	img,
	title,
	author,
	rating,
	price,
	rank
}:BookProps) {
    return (
        <article className="card">
			<img src={img} alt={title} />
			<a href="#">{title}</a>
			<a href="#">
				<span>{author}</span>
			</a>
			<span>{rating}</span>
			<span>${price}</span>
			<span className="rank"></span>
			<span className='rank-value'>#{rank}</span>
		</article>
    )
}