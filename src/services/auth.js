const auth = () => {
  const user = localStorage.getItem('@app:username');
  const token = localStorage.getItem('@app:usertoken');
  if (user && token) { return true } else { return false };
}

export default auth;