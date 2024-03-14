const BASE_URL = `${window.location.origin + "/"}`
let DYNAMIC_URL = window.location.href
const IMG_BASE_URL = process.env.PUBLIC_URL

//if we are in localhost, than don't change url
if(window.location.href.indexOf('localhost') > - 1) {
    DYNAMIC_URL = BASE_URL
}

export {
    BASE_URL,
    DYNAMIC_URL,
    IMG_BASE_URL
}