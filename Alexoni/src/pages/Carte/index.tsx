import { useState } from 'react';
import styles from './carte.module.scss';
import stylesGlobal from 'styles/_global.module.scss';
import Search from 'components/Search';
import Filters from 'components/Filters';
import Order from 'components/Order';
import Itens from 'components/Itens';

export default function Carte(){
	const [ search, setSearch ] = useState('');
	const [ filter, setFilter ] = useState<number | null>(null);
	const [ order, setOrder] = useState('');

	return(
		<section className={styles.carte}>
			<h3 className={stylesGlobal.titulo}>Menu</h3>
			<Search search={search} setSearch ={ setSearch }/>
			<div className={styles.carte__filters}>
				<Filters filter = {filter} setFilter= {setFilter}/>
				<Order order={order} setOrder= {setOrder} />
			</div>
			<Itens search={search} filter={filter} order={order} />
		</section>  
	);
}