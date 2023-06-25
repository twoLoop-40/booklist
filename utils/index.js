import { baseUrlForId, baseUrlForList } from "../constants";

export function asyncPipe(...fns) {
  return async (x) => {
    let result = x;
    try {
      for (const fn of fns) {
        result = await fn(result);
      }
      return result;
    } catch (err) {
      console.log(err);
    }
  };
}

export function makeApiAddress(baseAddress) {
  return (item) => `${baseAddress}${item ? item : ""}`;
}

export const apiForId = makeApiAddress(baseUrlForId);

export const apiForList = makeApiAddress(baseUrlForList);

export async function fetcher(url) {
  try {
    const response = await fetch(url).then((response) => response.json());
    return response.results;
  } catch (err) {
    console.log(err);
  }
}
