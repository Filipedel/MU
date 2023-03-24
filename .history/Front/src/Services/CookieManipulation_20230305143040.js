const getCookie = async () => {
   const cookie = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    const cookieJson = await cookie.json();
    return cookieJson;
}

export {
    getCookie
}