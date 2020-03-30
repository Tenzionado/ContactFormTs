var personData = [];
var formData = {
    firstname: document.getElementById('firstname'),
    lastname: document.getElementById('lastname'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    city: document.getElementById('city'),
    personTbody: document.getElementById('tbodys'),
    bntAddData: document.getElementById('addData'),
    btnShowData: document.getElementById('showData')
};
var btnFunc = {
    btnAdd: function () {
        personData.push({ FirstName: formData.firstname.value, LastName: formData.lastname.value, Email: formData.email.value, Phone: formData.phone.value, City: formData.city.value });
        btnFunc.clearFields();
    },
    btnShow: function () {
        var parentDiv = formData.personTbody;
        var tableRow;
        personData.forEach(function (x) {
            tableRow = document.createElement('tr');
            var tableDatas = document.createElement('td');
            var dt = document.createTextNode("" + x.FirstName);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);
            tableDatas = document.createElement('td');
            dt = document.createTextNode("" + x.LastName);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);
            tableDatas = document.createElement('td');
            dt = document.createTextNode("" + x.Email);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);
            tableDatas = document.createElement('td');
            dt = document.createTextNode("" + x.Phone);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);
            tableDatas = document.createElement('td');
            dt = document.createTextNode("" + x.City);
            tableDatas.appendChild(dt);
            tableRow.appendChild(tableDatas);
        });
        parentDiv.appendChild(tableRow);
    },
    clearFields: function () {
        formData.firstname.value = '';
        formData.lastname.value = '';
        formData.email.value = '';
        formData.phone.value = '';
        formData.city.value = '';
    }
};
formData.bntAddData.addEventListener('click', btnFunc.btnAdd);
formData.btnShowData.addEventListener('click', btnFunc.btnShow);
