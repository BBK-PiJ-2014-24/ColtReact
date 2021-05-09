export default {
    up(){

    },

    down(scale){
        const sizes = {
           xs:'575.9px',
           sm: '767.98px',
           md: '991.98px',
           lg: '1199.98px',
           xl: '1600px',
        }
        return `@media (max-width: ${sizes[scale]})`
    }
}