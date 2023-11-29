let form = document.getElementById("form")
let table = document.getElementById("table")
let table_body = document.getElementById("tbody")
let first_name = form.elements[0]
let last_name = form.elements[1]
let address = form.elements[2]
let pincode = form.elements[3]
let state = form.elements[4]
let country = form.elements[5]
let gender = document.getElementsByName("gender")
let select= document.getElementById("options")
let append_data = false
let error = document.getElementById("error")
document.getElementById("title").innerHTML="Form manipulation by DOM"

function formsubmission(){e
    let selectedoptions = []
    let table_row = document.createElement("tr") 
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    let c5 = document.createElement("td")
    let c6 = document.createElement("td")
    let c7 = document.createElement("td")
    let c8 = document.createElement("td")
    c1.innerHTML=first_name.value
    c2.innerHTML = last_name.value
    c3.innerHTML=  address.value
    c4.innerHTML = pincode.value
    c5.innerHTML = state.value
    c6.innerHTML = country.value
    for(let i =0;i<gender.length;i++){
        if(gender[i].checked){
            c7.innerHTML = gender[i].value
        }
    }
     for ( let j of select.options ){
        if(j.selected){
            selectedoptions.push(j.value)
        }
     }
     if(selectedoptions.length>1){
        append_data=true
        error.innerHTML=""
        c8.innerHTML=selectedoptions
     }
     else{
         error.innerHTML="please select two options"
     }
     if(append_data){
        console.log(c1,c2,c3,c4,c5,c6,c7,c8)
        table_row.appendChild(c1)
        table_row.appendChild(c2)
        table_row.appendChild(c3)
        table_row.appendChild(c4)
        table_row.appendChild(c5)
        table_row.appendChild(c6)
        table_row.appendChild(c7)
        table_row.appendChild(c8)
        table_body.appendChild(table_row)
        table.appendChild(table_body)
     }

 
}
