// src/api/fetchRandomUser.js

export async function fetchData() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return data;
}
