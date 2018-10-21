// @flow

import { BASE_URL } from 'consts/envVars';

export const asyncFetch = async () => {
  const url = `${BASE_URL}`,
    options = {
      method: 'GET',
      'Content-Type': 'application/json',
      dataType: 'json'
    };
  try {
    const response = await fetch(url, options);

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
