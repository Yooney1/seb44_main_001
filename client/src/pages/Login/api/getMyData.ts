import axios from 'axios';

export default async function MyData(url: string) {
  try {
    const accessToken = localStorage.getItem('Authorization');
    const refreshToken = localStorage.getItem('RefreshToken');

    const headers = {
      Authorization: accessToken,
      Refresh: refreshToken,
    };

    const res = await axios.get(url, { headers });

    if (res.headers.authorization) {
      localStorage.setItem('Authorization', res.headers.authorization);
    }

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
