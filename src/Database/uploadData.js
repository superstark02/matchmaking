import { db } from '../firebase'

export default function uploadData(data) {
    var i = 0
    for (i = 0; i < data.length; i++) {
        db.collection("Teachers").doc("T-" + i).set({
            name: data[i].names,
            desc: data[i].desc,
            location: data[i].location,
            image: data[i].image
        }).then(s => {
            console.log("Done")
        }) 
    }
}
