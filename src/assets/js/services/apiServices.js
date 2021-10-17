// @ts-check
import { HttpClient } from './httpClient'

export class ApiServices {

  static async getDownloadsCount() {
    const response = await HttpClient().get('/sample-endpoint');
    const { data } = response;
    return data;
  }
}
