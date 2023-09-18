// This is for APP specific logic - done on client side.

//to import all name exports use this syntax
import * as usersApi from "./users-api";

export async function signUp(userData) {
  console.log("this is userData", userData);
  // Delegate the network request code to the users-api.js API module
  // will ultimately return a JSON web Token
  const token = await usersApi.signUp(userData);
  // Persist the "token" by saving to browsers local storage
  localStorage.setItem("token", token);
  // calls getUser function on what is stored in local storage and return the token
  return getUser();
  // return token received from API
}

// login function
export async function login(credentials) {
  try {
    const token = await usersApi.login(credentials);
    localStorage.setItem("token", token);
    return getUser();
  } catch {
    throw new Error("Bad Credentials");
  }
}

// getToken function: assess the token in local storage
export function getToken() {
  // getItem a method of the local storage object
  // returns null if there is no string
  const token = localStorage.getItem("token");
  if (!token) return null;
  //obtain the tokens payload
  const payload = JSON.parse(atob(token.split(".")[1]));
  // JWT expiration is express in seconds not miliseconds so need to convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from local storage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

// getUser function: parses data from token's payload
export function getUser() {
  const token = getToken();
  // if there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

// logout function
export function logOut() {
  localStorage.removeItem("token");
}

export function checkToken() {
  // Just so that you don't forget how to use .then
  return (
    usersApi
      .checkToken()
      // checkToken returns a string, but let's
      // make it a Date object for more flexibility
      .then((dateStr) => new Date(dateStr))
  );
}
