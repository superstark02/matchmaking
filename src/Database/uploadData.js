import { db } from '../firebase'

export default function uploadData(data) {
    var i = 11
    for (i = 0; i < data.length - 1; i++) {
        db.collection("Teachers").doc("T-" + i).set({
            name: data[i].names,
            location: data[i].location,
            image: data[i].image,
            exp: data[i].experience,
            subject: data[i].subject,
            education: data[i].education
        }).then(s => {
            console.log("Done")
        }) 
    }
}

export function submit(data){
    var i = 0
    db.collection("Entries").doc(data.name).set({
        name: data.name,
        location: data.location,
        image: data.image,
        exp: data.exp,
        subject: data.subject,
        education: data.education
    }).then(s => {
        console.log("Done")
        return true
    }) 
}



