package com.jv2.jv2backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@Controller
public class PostNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(PostNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(PostNotFoundException exception) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("errorMEssage", exception.getMessage());

        return errorMap;
    }
}
