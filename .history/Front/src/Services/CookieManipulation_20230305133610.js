const getCookie = async () => {
   const cookie = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    console.log(cookie);
    return cookie;
}

export {
    getCookie
}