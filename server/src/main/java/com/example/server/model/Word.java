package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name="words")
public class Word {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String word;

    @Column
    private String partOfSpeech;

    @Column
    private Integer wordLength;

    @Column
    private String pronunciation;

    @Column
    private String pronunciationLink;

    public void Word() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getWord() {
        return word;
    }
    public void setWord(String word) {
        this.word = word;
    }

    public String getPartOfSpeech() {
        return partOfSpeech;
    }
    public void setPartOfSpeech(String partOfSpeech) {
        this.partOfSpeech = partOfSpeech;
    }

    public Integer getWordLength() {
        return wordLength;
    }
    public void setWordLength(Integer wordLength) {
        this.wordLength = wordLength;
    }

    public String getPronunciation() {
        return pronunciation;
    }
    public void setPronunciation(String pronunciation) {
        this.pronunciation = pronunciation;
    }

    public String getPronunciationLink() {
        return pronunciationLink;
    }
    public void setPronunciationLink(String pronunciationLink) {
        this.pronunciationLink = pronunciationLink;
    }
}
