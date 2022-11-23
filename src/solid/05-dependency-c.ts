import localPosts from '../data/local-database.json'
import { Post } from './05-dependency-b'

export abstract class PostProvivder {
    abstract getPost(): Promise<Post[]>
}

export class LocalDataBaseService implements PostProvivder {

  constructor() {}

  async getPost() {
      return [
          {
              'userId': 1,
              'id': 1,
              'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
              'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
          },
          {
              'userId': 1,
              'id': 2,
              'title': 'qui est esse',
              'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          }]
  }

}

export class JsonDataBaseService implements PostProvivder {
    async getPost () {
        return localPosts
    }
}

export class WebApiPostService implements PostProvivder {
    private http = new HttpAdapter()

    async getPost(): Promise<Post[]> {
        const posts = await this.http.get('https://jsonplaceholder.typicode.com/posts')
        return posts
    }
    
}

class HttpAdapter {
    async get (url: string) {
        const resp = await fetch(url)
        const data = await resp.json()

        return data
    }
}