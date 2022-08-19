var trueuser = 'sistema'
var truepass = '123456'
//var textinfo = window.document.getElementById('textinfo')

var username = document.getElementById('IdUser')
var password = document.getElementById('IdPass')
usernameval = String.username.value
passwordval = String.password.value


function login(){
    if(usernameval === trueuser && passwordval === truepass){
      window.alert('Welcome, Access Granteed!')
     // textinfo.innerHTML = 'Welcome! Access Granteed!'
    }else{
        window.alert('[FAILED] Wrong username or password!')
    }
    console.log(textinfo)
}