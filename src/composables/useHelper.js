
export const generateRandomNumber=()=>Math.floor(Math.random()*1000000000)
export const setCookie = (name,value,path,day) => {
    let date=new Date()
    date.setTime(date.getTime() + (day*24*60*60*1000))
    document.cookie=`${name}=${value};path=${path};expires=${date}`
}

export const getCookie = (name) => {
    let target=document.cookie.slice(document.cookie.indexOf(name))
    let info=JSON.parse(target.slice(target.indexOf('{')))
    return {
        id:info.id,hash:info.hash
    }
}