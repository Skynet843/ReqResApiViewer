const API_LINK = 'https://reqres.in/api';

export const getUsers = async page => {
  const link = API_LINK + `/users?page=${page}&delay=10`;
  try {
    const res = await fetch(link);
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.alert('Error:', err);
  }
};

export const getResources = async page => {
  const link = API_LINK + `/unknown?page=${page}`;
  try {
    const res = await fetch(link);
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.alert('Error:', err);
  }
};
