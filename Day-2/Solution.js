import userData from "./data.js";

function transformData(data){
    return data.map(
        data => {
            let person_first_name = data.name.first;
            let person_last_name = data.name.last;
            return {
                fullName: `${data.name.first} ${data.name.last}`,
                birthday: new Date(data.dob.date).toDateString()
            }
        }
    )
}

console.log(transformData(userData));
