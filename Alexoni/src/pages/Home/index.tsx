import carte from 'data/carte.json';
import { useEffect, useState } from 'react';
import styles from './home.module.scss';
import stylesGlobal from 'styles/_global.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Home(){
	const [recommendedDishes, setRecommendedDishes] =  useState(carte);
	const navigate = useNavigate();

	function randomDishes(){
		const recommendedDishes = [...carte];
		setRecommendedDishes(recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3));
	}

	function redirectToDetails(dish: typeof carte[0]){
		navigate(`/dish/${dish.id}`, { state: {dish}, replace:true });

	}

	useEffect(()=>{
		randomDishes();
	},[]);
    
	return(
		<section>
			<h3 className={stylesGlobal.titulo}>Kitchen recommendations</h3>
			<div className={styles.recomendados}>
				{recommendedDishes.map(item => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button onClick={()=> {redirectToDetails(item);}} className={styles.recomendado__botao}>See more</button>
					</div>
				))}
			</div>
			<h3 className={stylesGlobal.titulo}>Our home</h3>
			<div className={styles.nossaCasa}>
				<img src='/assets/nossa_casa.png' alt="Casa do Alexoni" />
				<div className={styles.nossaCasa__endereco}>
                    Rua Indaiatuba, 3185 <br /><br /> Do Salto - SC
				</div>

			</div>
		</section>
	);
}