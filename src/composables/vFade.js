
export default {
    mounted(el,binding){
       el.style.cssText='transition:all 250ms linear'
        el.style.opacity='0'
        el.style.visibility='hidden'
    },
    updated(el,binding){
        if(binding.value){
            el.style.opacity='1'
            el.style.visibility='visible'
        }else {
            el.style.opacity='0'
            el.style.visibility='hidden'
        }
    }
}