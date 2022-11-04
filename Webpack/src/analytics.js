function createAnalytics() {
    let counter = 0;
    let isDestryed = false

    const listener = () => counter++
    document.addEventListener('click', listener)
    return{
        destroy(){
            document.removeEventListener('click', listener)
            isDestryed = true;
        },
        getClicks(){
            if(isDestryed){
                return 'Analytics is destroyed'
            }
            return counter++
        }
    }
}


window.analytics = createAnalytics()