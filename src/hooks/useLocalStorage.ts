const LOCALSTORAGE_KEY_USERNAME = "username";

export default function useLocalStorage() {
  function getObject (key : string) : object {
    return JSON.parse(localStorage.getItem(key) || "");
  }
  function setObject (key : string, value : object) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  function getString (key : string) : string {
    return localStorage.getItem(key) || "";
  }
  function setString (key : string, value : string) {
    localStorage.setItem(key, value);
  }
  
  return {
    getObject,
    setObject,
    getString,
    setString,
    getUsername: () => getString(LOCALSTORAGE_KEY_USERNAME),
    setUsername: (username: string) => setString(LOCALSTORAGE_KEY_USERNAME, username)
  }
}