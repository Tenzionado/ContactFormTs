
var personData = [];

var formData = {
    firstname : <HTMLInputElement>document.getElementById('firstname'),
    lastname : <HTMLInputElement>document.getElementById('lastname'),
    email : <HTMLInputElement>document.getElementById('email'),
    phone : <HTMLInputElement>document.getElementById('phone'),
    city : <HTMLInputElement>document.getElementById('city'),
    personTbody :document.getElementById('tbodys'),
    bntAddData : document.getElementById('addData'),
    btnShowData : document.getElementById('showData')
}

var btnFunc = {
    btnAdd : () => {
        personData.push({FirstName: formData.firstname.value, LastName: formData.lastname.value, Email: formData.email.value, Phone: formData.phone.value, City: formData.city.value});
        btnFunc.clearFields();
    },
    btnShow : () => {
        let parentDiv = formData.personTbody;
        
        let tableRow;
        personData.forEach( x =>{
            
            tableRow = document.createElement('tr');
            let tableDatas = document.createElement('td');
            let dt = document.createTextNode(`${x.FirstName}`);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);

            tableDatas =document.createElement('td');
            dt = document.createTextNode(`${x.LastName}`);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);

            tableDatas =document.createElement('td');
            dt = document.createTextNode(`${x.Email}`);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);

            tableDatas =document.createElement('td');
            dt = document.createTextNode(`${x.Phone}`);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);

            tableDatas =document.createElement('td');
            dt = document.createTextNode(`${x.City}`);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);

            
        });

        parentDiv.appendChild(tableRow);

    },
    clearFields : () => {
        formData.firstname.value = '';
        formData.lastname.value = '';
        formData.email.value = '';
        formData.phone.value = '';
        formData.city.value = '';
    }
}

formData.bntAddData.addEventListener('click', btnFunc.btnAdd);
formData.btnShowData.addEventListener('click', btnFunc.btnShow);