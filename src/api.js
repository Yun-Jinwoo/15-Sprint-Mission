export async function getProducts({ pageSize = 10, orderBy = "recent" }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const body = await response.json();
  return body;
}
