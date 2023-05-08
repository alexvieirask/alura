import React from 'react';
import filters from './filters.json';
import styles from './filters.module.scss';
import classNames from 'classnames';

interface Ioption{
    id: number,
    label: string
}

interface Props{
    filter: number | null,
    setFilter:React.Dispatch<React.SetStateAction<number | null>>
}


export default function Filters({ filter, setFilter } : Props){
	function selectedOption(option: Ioption) {
		return setFilter(option.id);
	}

	return(
		<div className={styles.filters}>
			{filters.map((option)=> (
				<button 
					className={classNames({
						[styles.filters__filter] : true,
						[styles['filters__filter--active']] : filter === option.id
					})} 
                
					onClick={()=>{ selectedOption(option);}} 
					key={option.id}>{option.label}
				</button>
			))}</div>
	);
}