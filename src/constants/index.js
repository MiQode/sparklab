import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  postgres,
  facebook,
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  reactjs,
  svelte,
  redis,
  elixir,
  nodejs,
  couchbase,
  rabbitmq,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  twitter,
  netlifylogoWhite,
  gitWhite,
  dockerLogo,
  jenkinsLogo,
  awsLogo,
} from '../assets';

export const navigation = [
  {
    id: '0',
    title: 'Solutions',
    url: '#solutions',
  },
  {
    id: '1',
    title: 'Company',
    url: '#company',
  },
  {
    id: '2',
    title: 'How we build',
    url: '#how-we-build',
  },
  {
    id: '3',
    title: 'Support',
    url: '#support',
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  netlifylogoWhite,
  gitWhite,
  dockerLogo,
  jenkinsLogo,
  awsLogo,
];

export const sparklabServices = [
  'Enhanced User Experience',
  'Predictive Analytics and Maintenance',
  'Automated Processes and Efficiency',
];

export const sparklabServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: '0',
    title: 'Property Management',
    text: 'SparkLab introduces a cutting-edge property management system designed to streamline operations and enhance efficiency for property owners and managers.',
    date: 'June 2024',
    status: 'done',
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: '1',
    title: 'Video Streaming',
    text: 'Our platform ensures seamless integration, smart automation, and top-notch security, providing a superior streaming experience for both businesses and consumers alike.',
    date: 'February 2024',
    status: 'progress',
    imageUrl: roadmap2,
  },
  {
    id: '2',
    title: 'Cashless Transaction',
    text: "Our cards integrate seamlessly with digital payment systems, leveraging smart automation to ensure swift and secure transactions. With top-notch security features, SparkLab's cashless transaction cards redefine modern payment experiences, offering reliability and peace of mind to users globally.",
    date: 'November 2024',
    status: 'progress',
    imageUrl: roadmap3,
  },
  {
    id: '3',
    title: 'Custom Software',
    text: `Utilizing the latest technologies and agile methodologies, we ensure your software is scalable, 
            secure, and perfectly aligned with your business goals. Choose SparkLab for bespoke software that 
            delivers exceptional performance and value.`,
    date: 'Anytime',
    status: 'progress',
    imageUrl: roadmap4,
  },
];

export const techText = `SparkLab prioritizes user-centric design, creating intuitive and engaging interfaces that deliver exceptional user experiences, 
    driving satisfaction and loyalty.`;

export const techContent = [
  {
    id: '0',
    title: 'Seamless Integration',
    text: `Designed to effortlessly integrate with your existing systems and workflows, 
            ensuring a smooth and uninterrupted transition that enhances productivity and efficiency.`,
  },
  {
    id: '1',
    title: 'Smart Automation',
    text: `Embrace the future with our smart automation capabilities that streamline processes, reduce 
          manual efforts, and improve operational efficiency, allowing you to focus on what truly matters.`,
  },
  {
    id: '2',
    title: 'Top-notch Security',
    text: `We prioritize your security with our top-notch protection measures, safeguarding your data and 
          digital assets against threats and ensuring peace of mind with every transaction.`,
  },
];

export const techApps = [
  {
    id: '0',
    title: 'Couchbase',
    icon: couchbase,
    width: 26,
    height: 36,
  },
  {
    id: '1',
    title: 'Rabbitmq',
    icon: rabbitmq,
    width: 34,
    height: 36,
  },
  {
    id: '2',
    title: 'postgres',
    icon: postgres,
    width: 36,
    height: 28,
  },
  {
    id: '3',
    title: 'Nodejs',
    icon: nodejs,
    width: 34,
    height: 35,
  },
  {
    id: '4',
    title: 'React',
    icon: reactjs,
    width: 34,
    height: 34,
  },
  {
    id: '5',
    title: 'Svelte',
    icon: svelte,
    width: 34,
    height: 34,
  },
  {
    id: '6',
    title: 'Elixir',
    icon: elixir,
    width: 26,
    height: 34,
  },
  {
    id: '7',
    title: 'Redis',
    icon: redis,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: '0',
    title: 'Innovative Solutions',
    text: `We pride ourselves on pushing the boundaries of innovation. Our team leverages cutting-edge technologies to 
            develop solutions that not only meet current industry standards but also anticipate future trends. 
            This proactive approach ensures that your business stays ahead of the curve.`,
    backgroundUrl: './src/assets/benefits/card-1.svg',
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '1',
    title: ' Tailored Services',
    text: `We understand that every business is unique, which is why we offer customized software solutions tailored to 
            your specific needs. Our comprehensive consultation process ensures that we fully understand your requirements and 
            deliver solutions that are perfectly aligned with your business objectives.`,
    backgroundUrl: './src/assets/benefits/card-2.svg',
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: '2',
    title: 'Experienced Team',
    text: `Our team comprises seasoned professionals with extensive experience across various domains of software development. 
            From mobile app development to enterprise software solutions, our experts bring a wealth of knowledge and expertise to every 
            project, ensuring high-quality and reliable outcomes.`,
    backgroundUrl: './src/assets/benefits/card-3.svg',
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: '3',
    title: 'Commitment to Quality',
    text: `Quality is at the heart of everything we do. At SparkLab Technologies, we adhere to strict quality assurance protocols to ensure 
            that every product we deliver meets the highest standards. Our commitment to excellence guarantees that you receive robust, 
            secure, and efficient software solutions.`,
    backgroundUrl: './src/assets/benefits/card-4.svg',
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: '4',
    title: 'Customer-Centric',
    text: `We place a strong emphasis on building long-term relationships with our clients. Our customer-centric approach means that we are 
            always available to provide support, answer queries, and make adjustments as needed. Your satisfaction is our top priority, 
            and we strive to exceed your expectations at every turn.`,
    backgroundUrl: './src/assets/benefits/card-5.svg',
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '5',
    title: 'Comprehensive Support',
    text: `Our services don’t end at deployment. We offer ongoing maintenance and support to ensure that your software continues to perform optimally. 
            Whether you need updates, troubleshooting, or new features, our team is always ready to assist, providing you with peace of mind 
            and a seamless user experience.`,
    backgroundUrl: './src/assets/benefits/card-6.svg',
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: '1',
    title: 'Twitter',
    iconUrl: twitter,
    url: '#',
  },

  {
    id: '4',
    title: 'Facebook',
    iconUrl: facebook,
    url: '#',
  },
];
