import JoseMaria from '../../../assets/img/work/jose-maria-mineria.png';
import NubeCode from '../../../assets/img/work/nube.png';
import Productrivia from '../../../assets/img/work/productrivia.png';
import FluiEco from '../../../assets/img/work/fluieco.png';
import Supra from '../../../assets/img/work/supra.png';
import Wine from '../../../assets/img/work/wine.png';
import Giro from '../../../assets/img/work/giro.png';

import { useLanguage } from '../../../context/LanguageContext';

export default function getWorkData() {
	const { language } = useLanguage();

	let workData = [];

	if (language === 'es') {
		workData = [
			{
				name: 'Nube Code',
				png: NubeCode,
				description: 'Para NubeCode, desarrollé una landing page de diseño limpio y funcional, centrada en ofrecer una experiencia clara y directa para los visitantes.',
				link: 'https://nubecode.ar/',
				techs: ['React'],
			},
			{
				name: 'Wine-Voyage',
				png: Wine,
				description: 'Para Wine-Voyage, desarrollé un sitio web enfocado en experiencias de cata de vinos en bote, priorizando un diseño elegante y responsive que refleja la exclusividad del servicio.',
				link: 'https://wine-voyage.com/',
				techs: ['React'],
			},
			{
				name: 'Giro',
				png: Giro,
				description: 'En Giro Ingeniería desarrollé un sitio web profesional para la empresa especializada en fabricación de piezas industriales, destacando su experiencia técnica con un diseño limpio y funcional.',
				link: 'https://www.giroingenieria.com.ar/',
				techs: ['React'],
			},
			{
				name: 'FluiEco',
				png: FluiEco,
				description: 'Para FluiEco creé un sitio web moderno para la empresa de tanques de agua, enfocándome en presentar sus productos de manera clara y accesible con una navegación intuitiva.',
				link: 'https://fluieco.com.ar',
				techs: ['React'],
			},
			{
				name: 'Supra',
				png: Supra,
				description: 'En Supra desarrollé el sitio web para esta empresa ambiental, implementando un diseño que comunica profesionalismo y compromiso con el cuidado del medio ambiente.',
				link: 'https://suprasas.com',
				techs: ['React'],
			},
			{
				name: 'Productrivia',
				png: Productrivia,
				description: 'En Productrivia me enfoqué en la creación de la estructura y diseño del sitio con enfoque mobile, desarrollando funcionalidades para la feria del sol del gobierno provincial.',
				link: '',
				techs: ['React'],
			},
			{
				name: 'Jose Maria Mineria',
				png: JoseMaria,
				description: 'Contribuí al diseño y desarrollo del sitio web para el proyecto José María Minería, desplegando habilidades de construcción e implementación de funcionalidades interactivas y optimización de la experiencia del usuario.',
				link: '',
				techs: ['Next.js'],
			},
		];
	} else {
		workData = [
			{
				name: 'Nube Code',
				png: NubeCode,
				description: 'For NubeCode, I developed a clean and functional landing page, focused on providing a clear and straightforward experience for visitors.',
				link: 'https://nubecode.ar/',
				techs: ['React'],
			},
			{
				name: 'Wine-Voyage',
				png: Wine,
				description: 'For Wine-Voyage, I developed a website focused on boat wine tasting experiences, prioritizing an elegant and responsive design that reflects the exclusivity of the service.',
				link: 'https://wine-voyage.com/',
				techs: ['React'],
			},
			{
				name: 'Giro',
				png: Giro,
				description: 'For Giro Engineering, I developed a professional website for the company specialized in industrial parts manufacturing, highlighting their technical expertise with a clean and functional design.',
				link: 'https://www.giroingenieria.com.ar/',
				techs: ['React'],
			},
			{
				name: 'FluiEco',
				png: FluiEco,
				description: 'For FluiEco, I created a modern website for the water tank company, focusing on presenting their products clearly and accessibly with intuitive navigation.',
				link: 'https://fluieco.com.ar',
				techs: ['React'],
			},
			{
				name: 'Supra',
				png: Supra,
				description: 'For Supra, I developed the website for this environmental company, implementing a design that communicates professionalism and commitment to environmental care.',
				link: 'https://suprasas.com',
				techs: ['React'],
			},
			{
				name: 'Productrivia',
				png: Productrivia,
				description: 'In Productrivia, I focused on creating the structure and design of the mobile-first site, developing features for the provincial government\'s sun fair.',
				link: '',
				techs: ['React'],
			},
			{
				name: 'Jose Maria Mineria',
				png: JoseMaria,
				description: 'I contributed to the design and development of the website for the José María Mining project, deploying skills in building and implementing interactive features and optimizing the user experience.',
				link: '',
				techs: ['Next.js'],
			},
		];
	}

	return workData;
}