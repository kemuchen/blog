import moment from 'moment';

const carousel = [
	'../../images/1.jpg',
	'../../images/2.jpg',
	'../../images/4.jpg'
];

const articleList = [];

for (let i = 0; i < 13; i++) {
  articleList.push({
    href: '',
    title: `ant design part ${i}`,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and ' + 
    	'high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    img: '../../images/1.jpg'
  });
}

const getHomeData = {
	carousel,
	articleList
}

export default {
  'GET /api/home/queryHomeData': getHomeData,
};
