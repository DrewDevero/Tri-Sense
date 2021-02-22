package com.example.server.controller;

import com.example.server.model.Word;
import com.example.server.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/words")
public class WordController {
    @Autowired
    WordService wordService;

    @GetMapping
    public Iterable<Word> getWords() { return wordService.getWords(); }

    @PostMapping
    public Word createWord(@RequestBody Word word) { return wordService.createWord(word); }

    @PatchMapping
    public Word updateWord(@RequestBody Word word) { return wordService.updateWord(word); }

    @DeleteMapping("/{id}")
    public HttpStatus deleteWord(@PathVariable Long id) { return wordService.deleteWord(id); }
}
