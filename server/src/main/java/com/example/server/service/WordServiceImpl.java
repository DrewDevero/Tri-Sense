package com.example.server.service;

import com.example.server.model.Word;
import com.example.server.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class WordServiceImpl implements WordService {

    @Autowired
    WordRepository wordRepository;

    @Override
    public Iterable<Word> getWords() {
        return wordRepository.findAll();
    }

    @Override
    public Word getWordById(Long id) {
        return wordRepository.findById(id).get();
    }

    @Override
    public Word createWord(Word word) {
        return wordRepository.save(word);
    }

    @Override
    public Word updateWord(Word word) {
        return wordRepository.save(word);
    }

    @Override
    public HttpStatus deleteWord(Long id) {
        wordRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
