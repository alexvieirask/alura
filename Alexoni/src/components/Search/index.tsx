import styles from './search.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props{
    search:string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Search({ search, setSearch } : Props){
	return(
		<div className={styles.search}>
			<input type="text" value={search} onChange={event => setSearch(event.target.value)} />
			<CgSearch size={20} color="#4C4D5E"/>
		</div>
	);
}