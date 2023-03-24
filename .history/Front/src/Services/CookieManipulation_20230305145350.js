

const getCookie = async () => {
    const PromiseUserSon = 
      document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});;
    const UserSonResponse = await PromiseUserSon.json();
    const GetUserSon = UserSonResponse.DataJour;
    console.log(GetUserSon);
    return GetUserSon;
}

export {
    getCookie
}