let users = [];
let userContainer = document.getElementById('container');
let alertDiv = document.getElementById('alert');

function render() {
    userContainer.innerText = "";
    for (let i = 0; i < users.length; i++) {
        let div = document.createElement('div');
        let name = document.createElement('div');
        let age = document.createElement('div');

        name.innerText = users[i].name;
        age.innerText = users[i].age;

        userContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(age);
        div.classList.add('user');
    }
}

function register() {
    let nameInput = document.getElementById("name");
    let ageInput = document.getElementById("age");

    let user = {
        name: nameInput.value,
        age: Number(ageInput.value),
    };

    if (user.name == "" || user.age=="") {
        alertDiv.innerText = 'Please enter required details';
        alerting();
        return;
    }

    if (user.age >= 12 && user.age <= 18) {
        if (checkName(user.name)) {
            users.push(user);
            render();
            alertDiv.innerText = 'User added successfully!';
            alerting();
        }
    } else {
        alertDiv.innerText = 'User is not eligible';
        alerting();
    }
    console.log(users);
}

function checkName(name) {
    const namePattern = /^[A-Za-z]+$/;
    if (name.length >= 3 && namePattern.test(name)) {
        return true;
    } else {
        alertDiv.innerText = 'Enter a valid name';
        alerting();
        return false;
    }
}

function alerting() {
    alertDiv.classList.remove('d-none');
    alertDiv.classList.add('alert');

    setTimeout(() => {
        alertDiv.classList.add('d-none');
        alertDiv.classList.remove('alert');
    }, 3000);
}
