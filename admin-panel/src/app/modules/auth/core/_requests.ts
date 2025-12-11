import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/auth';

export async function login(email_or_phone: string, password: string) {
  const { data } = await axios.post(`${API_URL}/login`, {
    email_or_phone,
    password,
  });

  // Backend returns: success, token, data (user)
  return {
    token: data.token,
    user: data.data, // AbleMates backend mein user is inside "data"
  };
}
