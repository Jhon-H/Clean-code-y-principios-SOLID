import { JsonDataBaseService, LocalDataBaseService, PostProvivder } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor( private postProvider: PostProvivder) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        this.posts = await this.postProvider.getPost()

        return this.posts;
    }
}