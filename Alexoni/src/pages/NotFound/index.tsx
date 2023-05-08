import styles from './notfound.module.scss';
import stylesGlobal from 'styles/_global.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
	const navigate = useNavigate();
    
	function handleBackPage(){
		const BACK_PAGE = -1;
		navigate(BACK_PAGE);
	}

	return (
		<div className={classNames({
			[styles.container] : true,
			[stylesGlobal.container] : true

		})}>
			<div className={styles.voltar}>
				<button onClick={()=>{handleBackPage();}}>{'< Back'}</button>
			</div>
			<NotFoundImage />

		</div>
	);

}