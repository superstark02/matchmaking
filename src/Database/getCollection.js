import { db } from '../firebase'

export default function getCollection(name) {

    return new Promise((resolve, reject) => {

        var data = [];

        db.collection(name).limit(9).orderBy('exp', 'desc')
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    data.push(doc.data())
                });

                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
    });
}

export function getQuery(name, query) {

    return new Promise((resolve, reject) => {

        var data = [];

        db.collection(name).orderBy("exp", "desc").startAfter(query).limit(10)
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    data.push(doc.data())
                });

                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
    });
}