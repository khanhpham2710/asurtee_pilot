import Cookie from "js-cookie";

const setCookie = (name, value) => {
    Cookie.set(name, value, {
        expires: 1 / 96,
        secure: true,
        sameSite: "strict",
        path: '/'
    });
}

const getCookie = (name) => {
    return Cookie.get(name);
}

const removeCookie = (name) => {
    return Cookie.remove(name);
}

export { setCookie, getCookie, removeCookie };
