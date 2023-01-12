
const setCookie = (name,hash,day) => {
    let date=new Date()
    date.setTime(date.getTime() + (day*24*60*60*1000))
    document.cookie=`${name}=${hash};path=/;expires=${date}`
}


const getCookie = (name) => {
    return document.cookie.includes(name);
}
const removeCookie = (name,day) => {
    let date=new Date()
    date.setTime(date.getTime() - (day*24*60*60*1000))
    document.cookie=`${name}=;path=/;expires=${date}`
}

export {setCookie,getCookie,removeCookie}