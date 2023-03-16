import { HttpError } from "./HttpError.ts";

export const fetchAPI = async <T>(
  input: string | Request,
  init?: RequestInit,
): Promise<T> => {
  const response = await fetch(input, {
    ...init,
    headers: {
      accept: "application/json",
      ...init?.headers,
    },
  });

  if (response.ok) {
    return response.json();
  }

  console.error(input, response);
  throw new HttpError(response.status, `${input}`);
};
