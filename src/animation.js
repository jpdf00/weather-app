async function getGIF(url) {
  const res = await fetch(url, {mode: 'cors'})
  return res.json();
};

export { getGIF };
