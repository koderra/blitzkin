export class Blitzkin {
  constructor(private _data) {}
  async pause(seconds: number) {
    return new Promise(resolve => {
      setTimeout(() => {}, seconds * 1000);
    });
  }
  async get(url: string, options?: any) {
    return new Promise((resolve, reject) => {
      require("request").get({ url: url }, (error, response, body) => {
        if (error) {
          response.error = error;
          response.body = body;
          return reject(response);
        }
      });
    });
  }
  async filter(data) {}
  async run(name: string) {}
}
