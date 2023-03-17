package com.jv2.jv2backend.repository;

import com.jv2.jv2backend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

}
