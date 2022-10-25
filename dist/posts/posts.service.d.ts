import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
export declare class PostsService {
    private postsRepository;
    constructor(postsRepository: Repository<Post>);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<number | Post>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<Post>;
    remove(id: number): Promise<Post>;
}
