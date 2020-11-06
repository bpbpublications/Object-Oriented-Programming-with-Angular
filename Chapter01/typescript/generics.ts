
  export function getResponse<T>(httpUrl: string): T {
    let response: T;
    // call http service and return repsonse
    return response;
  }

  let httpClient1 = getResponse<string>('someurl');
  let httpClient2 = getResponse<number>('someurl');
