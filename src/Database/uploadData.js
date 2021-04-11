import { db } from '../firebase'

export default function uploadData(data) {
    var i = 11
    for (i = 11; i < data.length - 1; i++) {
        db.collection("Teachers").doc("T-" + i).set({
            name: data[i].names,
            location: data[i].location,
            image: data[i].image,
            exp: data[i].experience,
            subject: data[i].subject
        }).then(s => {
            console.log("Done")
        }) 
    }
}



