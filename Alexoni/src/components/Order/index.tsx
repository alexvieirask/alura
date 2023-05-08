import styles from './order.module.scss';
import options from './options.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props{
    order: string,
    setOrder: React.Dispatch<React.SetStateAction<string>>
}

export default function Order({ order, setOrder } : Props){
	const [ open, setOpen ] = useState(false);
	const nameOrder = order && options.find(option => option.value === order)?.name;


	return(
		<button 
			onBlur={()=> setOpen(false)} 
			onClick={()=>setOpen(!open)} 
			className={classNames({
				[styles.order]: true,
				[styles['order--active']] : order !== ''
			})}
		>
			<span>{nameOrder || 'filter by'}</span>
			{ open? <MdKeyboardArrowUp size={20} />: <MdKeyboardArrowDown size={20} /> }
			<div className={classNames({
				[styles.order__options] : true,
				[styles['order__options--active']]: open
			})}
			>
				{options.map(option=> (
					<div 
						onClick={()=> setOrder(option.value)} 
						className={styles.order__option}
						key={option.value}>{
							option.name}
					</div>
				))}
			</div>
		</button>
	);
}
