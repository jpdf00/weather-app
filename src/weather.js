async function getData(url) {
  const res = await fetch(url, { method: 'POST', mode: 'cors' })
  .catch((err) => {
    return err;
  });
  return res.json();
}

export default getData;
