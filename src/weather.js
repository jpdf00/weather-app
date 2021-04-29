async function getData(url) {
  const res = await fetch(url, { method: 'POST', mode: 'cors' });
  return res.json();
}

export default getData;
