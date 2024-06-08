import JoseMaria from '../../../assets/img/work/jose-maria-mineria.png';
import NubeCode from '../../../assets/img/work/nube-code.png';
import Productrivia from '../../../assets/img/work/productrivia.png';
import Ciicap from '../../../assets/img/work/ciicap.png';
import NubeMenu from '../../../assets/img/work/nube-menu.png';
import AppDolar from '../../../assets/img/work/app-dolar.png';

import { useLanguage } from '../../../context/LanguageContext';

export default function getWorkData() {
	const { language } = useLanguage();
 
	let workData = [];
 
	if (language === 'es') {
	    workData = [
		   { name: 'Jose Maria Mineria', png: JoseMaria, description: 'Contribuí al diseño y desarrollo del sitio web para el proyecto José María Minería, desplegando habilidades de construcción e implementación de funcionalidades interactivas y optimización de la experiencia del usuario.' },
		   { name: 'Nube Code', png: NubeCode, description: 'Para NubeCode, desarrollé una landing page de diseño limpio y funcional, centrada en ofrecer una experiencia clara y directa para los visitantes.' },
		   { name: 'Productrivia', png: Productrivia, description: 'En el proyecto Productrivia, me enfoqué en la creación de la estructura y diseño del sitio web, así como en la implementación de funcionalidades adicionales para enriquecer la experiencia del usuario.' },
		   { name: 'NubeMenu', png: NubeMenu, description: 'NubeMenu representó un desafío completo en el que asumí un rol integral. Desde el diseño hasta el desarrollo y la implementación de funcionalidades, me dediqué a crear una experiencia óptima para el usuario. Esto incluyó el diseño de la interfaz de usuario (UX/UI), el desarrollo del front-end y la integración de todas las funcionalidades con el backend, garantizando un producto final cohesivo y efectivo.'},
		   { name: 'App Dolar', png: AppDolar, description: 'Esta es una app mobile sencilla de uso personal, la cual diseñe y desarrolle para poner en practica mis conocimientos en React Native.'},
		   { name: 'Ciicap', png: Ciicap, description: 'Me enfoqué en el esarrollo del layout del sitio web para Ciicap, creando la estructura fundamental que garantizó una navegación fluida y una presentación visualmente atractiva del contenido.' },
	    ];
	} else {
	    workData = [
		   { name: 'Jose Maria Mineria', png: JoseMaria, description: 'I contributed to the design and development of the website for the José María Mining project, deploying skills in building and implementing interactive features and optimizing the user experience.' },
		   { name: 'Nube Code', png: NubeCode, description: 'For NubeCode, I developed a clean and functional landing page, focused on providing a clear and straightforward experience for visitors.' },
		   { name: 'Productrivia', png: Productrivia, description: 'In the Productrivia project, I focused on creating the structure and design of the website, as well as implementing additional features to enhance the user experience.' },
		   { name: 'NubeMenu', png: NubeMenu, description: 'NubeMenu represented a complete challenge where I took on an integral role. From design to development and implementation of features, I dedicated myself to creating an optimal user experience. This included designing the user interface (UI/UX), frontend development, and integrating all features with the backend, ensuring a cohesive and effective final product.'},
		   { name: 'App Dolar', png: AppDolar, description: 'This is a simple mobile app for personal use, which I designed and developed to put my React Native skills into practice.'},
		   { name: 'Ciicap', png: Ciicap, description: 'I focused on developing the layout of the website for Ciicap, creating the fundamental structure that ensured smooth navigation and visually appealing presentation of content.' },
	    ];
	}
 
	return workData;
 }