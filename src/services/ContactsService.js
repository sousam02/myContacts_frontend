import HttpClient from './utils/HttpClient';

class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/95e3f252-4b69-432a-b080-83abd8c40d28?orderBy=${orderBy}`);
  }
}

export default new ContactService();
