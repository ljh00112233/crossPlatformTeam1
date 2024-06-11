import 경찰 from './image/경찰.png'
import 과학자 from './image/과학자.png'
import 농부 from './image/농부.png'
import 소방관 from './image/소방관.png'
import 요리사 from './image/요리사.png'
import 의사 from './image/의사.png'
import 축구선수 from './image/축구선수.png'
import 판사 from './image/판사.png'
import 화가 from './image/화가.png'

export const Job = [
    {id: 1, picture : 경찰, name : '경찰'}, 
    {id: 2, picture : 과학자, name : '과학자'}, 
    {id: 3, picture : 농부, name : '농부'}, 
];

export const Job1 = [
    {id: 4, picture : 소방관, name : '소방관'},   
    {id: 5, picture : 요리사, name : '요리사'}, 
    {id: 6, picture : 의사, name : '의사'}, 
];

export const Job2 = [
    {id: 7, picture : 축구선수, name : '축구선수'}, 
    {id: 8, picture : 판사, name : '판사'}, 
    {id: 9, picture : 화가, name : '화가'},
];

export const allJob = [
    ...Job,
    ...Job1,
    ...Job2,
]