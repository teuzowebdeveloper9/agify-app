// +page.js
export async function load({ url, fetch }) {
  const name = url.searchParams.get('name') || '';

  if (!name) {
    return { name: '', age: null };
  }

  const res = await fetch(`https://api.agify.io?name=${name}`);
  const data = await res.json();

  return { name: data.name, age: data.age };
}
