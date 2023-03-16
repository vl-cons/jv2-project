package com.jv2.jv2backend.exception;

public class PostNotFoundException extends RuntimeException {
    public PostNotFoundException(Long id) {
        super("Could not found the post with id" + id);
    }
}

