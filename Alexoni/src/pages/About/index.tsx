import styles from './about.module.scss';
import stylesGlobal from 'styles/_global.module.scss';

const IMAGENS = [
	'assets/about/massa1.png',
	'assets/about/massa2.png',
];

export default function About(){
	return(
		<section>
			<h3 className={stylesGlobal.titulo}>About</h3>
			<div className={styles.sobreNos}>
				<img src="assets/about/casa.png" alt="Casa Alexoni" />
				<div className={styles.sobreNos__texto}>
					<p>Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!</p>
					<p>Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!</p>
					<p>Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!</p>
				</div>

			</div>
			<div className={styles.imagens}>
				{IMAGENS.map( (imagem, index) => (
					<div className={styles.imagens__imagem} key={index}>
						<img src={imagem} alt="imagem de massa" />
					</div>
				))}
			</div>
            
		</section>
	);
}