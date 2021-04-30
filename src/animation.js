async function getGIF(url) {
  const res = await fetch(url, { mode: 'cors' })
  .catch((err) => {
    return err;
  });
  return res.json();
}

export default getGIF;
