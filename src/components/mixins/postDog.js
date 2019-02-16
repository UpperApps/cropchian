import firebase from '../../../configFirebase';
import router from '../../router';

export default (url, comment, author) => {
    let date = new Date();
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    firebase.db
        .collection('dogs')
        .add({
            url,
            comment,
            info: `Posted by ${author != '' ? author : 'Unknow'} on ${
                days[date.getDay]
            }`,
            created_at: new Date().getTime()
        })
        .then(router.push({ name: 'home' }));
};
