

const getCookie = async () => {
    const PromiseUserSon = await fetch("/getCookie");
    const UserSonResponse = await PromiseUserSon.json();
    const GetUserSon = UserSonResponse.DataJour;
    console.log(GetUserSon);
    return GetUserSon;
}

export {
    getCookie
}