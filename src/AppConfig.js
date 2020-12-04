const menus = [
    
        {
            name:'Home', 
            link:'home',
            defaultActive:true
        },
        {
            name:'About', 
            link:'about',
        },
        {
            name:'Contact',
            link: 'contact',
        }
    ]

const pageTitles = Object.freeze({
    '/'          : 'Welcome',   
    '/home'      : 'Welcome',
    '/about'     : 'About Us',
    '/contact'   : 'Contact Us'
})

const AppConfig  = {
    menus,
    pageTitles
}
export default AppConfig;