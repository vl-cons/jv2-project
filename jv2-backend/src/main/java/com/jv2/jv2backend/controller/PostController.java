package com.jv2.jv2backend.controller;

import com.jv2.jv2backend.exception.PostNotFoundException;
import com.jv2.jv2backend.model.Post;
import com.jv2.jv2backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @PostMapping("/post")
    Post newPost(@RequestBody Post newPost) {
        return postRepository.save(newPost);
    }

    @GetMapping("/posts")
    List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/post/{id}")
    Post getPostById(@PathVariable Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new PostNotFoundException(id));
    }

    @PutMapping("/post/{id}")
    Post updatePost(@RequestBody Post newPost, @PathVariable Long id){
            return postRepository.findById(id)
                    .map(post -> {
                        post.setAuthor(newPost.getAuthor());
                        post.setTitle(newPost.getTitle());
                        post.setUrl(newPost.getUrl());
                        post.setYear(newPost.getYear());
                        post.setTopics(newPost.getTopics());
                        return postRepository.save(post);
                    }).orElseThrow(() -> new PostNotFoundException(id));
    }


    @DeleteMapping("/post/{id}")
    String deletePost(@PathVariable Long id) {
        if(!postRepository.existsById(id)) {
            throw new PostNotFoundException(id);
        }
        postRepository.deleteById(id);
        return "User with id " + id + " has been deleted";
    }

}
