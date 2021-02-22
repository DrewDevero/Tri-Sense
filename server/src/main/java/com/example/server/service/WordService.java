package com.example.server.service;

import com.example.server.model.Word;
import org.springframework.http.HttpStatus;

public interface WordService {
    Iterable<Word> getWords();
    Word getWordById(Long id);
    Word createWord(Word word);
    Word updateWord(Word word);
    HttpStatus deleteWord(Long id);
}
