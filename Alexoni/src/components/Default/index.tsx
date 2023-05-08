import styles from './default.module.scss';
import { Outlet } from 'react-router-dom';
import stylesGlobal from 'styles/_global.module.scss';

export default function Default() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>The house of code and dough</div>
			</header>
			<div className={stylesGlobal.container}>
				<Outlet />
			</div>
		</>
	);
}
