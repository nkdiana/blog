import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { setPriority } from 'os';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';


export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ){}
  create(createPostDto: CreatePostDto) {
    const newPost = this.postsRepository.create(createPostDto);
    return this.postsRepository.save(newPost); 
  }

  findAll() {
    return this.postsRepository.find();
  }

  findOne(id: number) {
    return this.postsRepository.findOneBy({id}); 
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    //return this.postsRepository.update(id, updatePostDto);
    const post = await this.findOne(id) as Post;
    post.title = updatePostDto.title;

    return this.postsRepository.save(post);
  }

  async remove(id: number) {
    const post = await this.findOne(id); 
    return this.postsRepository.remove(post as Post);
  }
}
