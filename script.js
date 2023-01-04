function setCookie(cname,cvalue){
    const d = new Date();
    d.setTime(d.getTime() + (3*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function storeValues(){
    setCookie("Username: ", document.forms.formid.name.value);
    setCookie("Phone: ", document.forms.formid.phone.value);
    setCookie("Email ID: ",document.forms.formid.email.value);
    sessionStorage.setItem("Username: ", document.forms.formid.name.value);
    sessionStorage.setItem("Password: ", document.forms.formid.password.value);
    localStorage.setItem("Phone: ", document.forms.formid.phone.value);
    localStorage.setItem("Email ID: ", document.forms.formid.email.value);
}

function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}

function delete_cookie(name){
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

