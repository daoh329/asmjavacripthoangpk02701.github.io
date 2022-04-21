class User {
    constructor(name, username, email, password, role) {
        this.name = name
        this.Username = username
        this.password = password
        this.email = email
        this.role = role
    }
    xuatthongtinuser() {
        console.log(`Name: ${this.name}`)
        console.log(`username: ${this.username}`)
        console.log(`password: ${this.password}`)
        console.log(`email: ${this.email}`)
        console.log(`role: ${this.role}`)
        // console.log(` ${this.}`)
    }
    getUsername() {
        return this.Username
    }
    getPassword() {
        return this.password
    }

    getrole() {
        return this.role
    }
}

class StoreUser {
    constructor() {
        this.users = []
    }
    addUser(User) {
        const currentList = this.users
        let flag = 0;
        for (let i = 0; i < currentList.length; i++) {
            const currentUser = currentList[i];
            if (currentUser.getUsername() === User.getUsername()) {
                return flag
            }
        }
        if (!flag) {
            flag = 1
            this.users.push(User)
        }
        return flag

        // c2 
        // const isExist = this.users.filter(currentUser => currentUser.getUsername() === User.getUsername())
        // console.log(`isExist`,isExist)
        // c3
        // const isExist = this.users.find(currentUser => currentUser.getUsername() === User.getUsername())
        // console.log(`isExist`,isExist)
    }
    login(username, password) {
        const currentList = this.users
        let flag = false;
        for (let i = 0; i < currentList.length; i++) {

            if (currentList[i].getUsername() === username &&
                currentList[i].getPassword() === password) {
                flag = true;
                return flag
            }
        }

        return flag
    }
    loginxuatthongtin(username, password) {
        const currentList = this.users

        for (let i = 0; i < currentList.length; i++) {

            if (currentList[i].getUsername() === username &&
                currentList[i].getPassword() === password) {

                return currentList[i];
            }
        }

        return null
    }
    getUserList() {
        return this.users
    }
    save() {
        const data = JSON.stringify(this.users)
        // set location storw
        localStorage.setItem('users', data)
    }
    getData() {
        const data = localStorage.getItem('users');
        if (data) {
            const userlist = JSON.parse(data);
            const arrUser = []
            for (let i = 0; i < userlist.length; i++) {
                const user = new User(
                    userlist[i].name,
                    userlist[i].Username,
                    userlist[i].email,
                    userlist[i].password,
                    userlist[i].role
                );
                arrUser.push(user);

            }
            this.users = arrUser
        }
    }


}

const store = new StoreUser()
store.getData()
console.log(store)

document.getElementById('Unameid')&&document.getElementById('Unameid').addEventListener('blur', function () {
    var check = document.getElementById('Unameid').value;
    if (check == "") {

        document.getElementById('errUname').innerHTML = "<spam>Username không được để trống!</spam>"
    } else {
        document.getElementById('errUname').innerHTML = ""
    }
})
function testEmail(x) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(x);
}
document.getElementById('emailid')&&document.getElementById('emailid').addEventListener('blur', function () {
    var check = document.getElementById('emailid').value;
    if (!testEmail(check)) {

        document.getElementById('erremail').innerHTML = "<spam>Email Sai!</spam>"
    } else {
        document.getElementById('erremail').innerHTML = ""
    }
})
document.getElementById('passwordid')&&document.getElementById('passwordid').addEventListener('blur', function () {
    var check = document.getElementById('passwordid').value;
    if (check == "") {

        document.getElementById('errpass').innerHTML = "<spam>Password không được để trống!</spam>"
    } else {
        document.getElementById('errpass').innerHTML = ""
    }
})
document.getElementById('nameid')&&document.getElementById('nameid').addEventListener('blur', function () {
    var check = document.getElementById('nameid').value;
    if (check == "") {

        document.getElementById('errname').innerHTML = "<spam>Name không được để trống!</spam>"
    } else {
        document.getElementById('errname').innerHTML = ""
    }
})

function signupcheck() {
    var check = document.getElementById('Unameid').value;
    if (check == "") {

        document.getElementById('errUname').innerHTML = "<spam>Username không được để trống!</spam>"
    } else {
        document.getElementById('errUname').innerHTML = ""
    }

    var check = document.getElementById('nameid').value;
    if (check == "") {

        document.getElementById('errname').innerHTML = "<spam>Username không được để trống!</spam>"
    } else {
        document.getElementById('errname').innerHTML = ""
    }


    function testEmail(x) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(x);
    }

    var check = document.getElementById('emailid').value;
    if (!testEmail(check)) {

        document.getElementById('erremail').innerHTML = "<spam>Email Sai!</spam>"
    } else {
        document.getElementById('erremail').innerHTML = ""
    }

    var check = document.getElementById('passwordid').value;
    if (check == "") {

        document.getElementById('errpass').innerHTML = "<spam>Password không được để trống!</spam>"
    } else {
        document.getElementById('errpass').innerHTML = ""
    }

    
    
    var radios = document.getElementsByName('role');
    for (var radio of radios)
    {
        if (radio.checked) {
            document.getElementById('errrole').innerHTML = ""
        }else{
            document.getElementById('errrole').innerHTML = "<spam>Role không được để trống!</spam>"
        }
    }
    
    var radios = document.getElementsByName("role");
    var selected = Array.from(radios).find(radio => radio.checked);
    const roles = selected.value;
    // if (radios.checked) {
    //             document.getElementById('errrole').innerHTML = ""
    //         }else{
    //             document.getElementById('errrole').innerHTML = "<spam>Role không được để trống!</spam>"
    // }

    const name = document.getElementById('nameid').value
    const username = document.getElementById('Unameid').value
    const email = document.getElementById('emailid').value
    const password = document.getElementById('passwordid').value
    
    
    if(name!=''&username!=''&email!=''&password!=''&roles!=''){
        const createUser = new User(name, username, email, password, roles);
        const isCheck = store.addUser(createUser)
        store.save()
        if (isCheck) {
            alert(`thành công`)
            window.location.href = "./login.html";
        } else {
            alert(`đã tồn tại`)
        }
    }
        
    
};

function signincheck() {
    let a = document.getElementById('nameidsi').value;
    let b = document.getElementById('passwordidsi').value;
    let html = document.getElementById('errsignin');

    if (store.login(a, b) == '' || store.login(a, b) == null) {
        html.innerHTML = '<spam>Sai tài khoản, mk hoặc khoảng trắng </spam>'
    }else {
        const isCheck = store.login(a, b)
        
        console.log(isCheck)
        if (isCheck) {
            if(store.loginxuatthongtin(a,b).role === 'admin'){
               alert('thành công admin')
            window.location.href = "./trangchu.html?role=admin"; 
            }
            else if(store.loginxuatthongtin(a,b).role === 'user'){
            alert('thành công user')
            window.location.href = "./trangchu.html?role=user";
        }
        else{
            alert('đăng nhập thất bại')
        }
}
}
}

