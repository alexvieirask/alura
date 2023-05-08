import menu from 'data/carte.json';
import Item from './item';
import { useState, useEffect } from 'react';

interface Props{
    search: string,
    filter: number | null,
    order: string
}

export default function Itens(props: Props){
	const [ list, setList ] = useState(menu);
	const { search, filter, order } = props;

	function searchTest(title : string){
		const regex = new RegExp(search,'i');
		return regex.test(title);
	}

	function filterTest(id: number ){
		if (filter !== null) return filter === id;
		return true;
	}

	function orderList(newList: typeof menu){
		switch(order) {
		case 'porcao': 
			return newList.sort((a, b) => a.size > b.size ? 1 : -1);
		case 'qtd_pessoas':
			return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
		case 'preco':
			return newList.sort((a, b) => a.price > b.price ? 1 : -1);
		default:
			return newList; 
		}

	}

	useEffect(()=>{
		const newList = menu.filter(item => searchTest(item.title) && filterTest(item.category.id));
		setList(orderList(newList));

	}, [ search, filter, order]);

	return(
		<div>{list.map(item => (
			<Item key={item.id} {...item} />
		) )}</div>
	);
}