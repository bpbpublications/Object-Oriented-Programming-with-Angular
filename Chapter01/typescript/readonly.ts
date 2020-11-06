
  export class WebClient {
    private readonly url: string;

    constructor() {
      this.url = 'someUrl';
    }

    getResponse() {
      this.url = 'anotherUrl'; // Error - Cannot assign to 'url' because it is a read-only
      const serverIp: string = '127.0.0.1';
      serverIp = '0.0.0.1'; // Error - Cannot assign to 'serverIp' because it is a constant.
    }
  }
