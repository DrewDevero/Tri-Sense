package com.example.server.word;

import javax.persistence.*;

@Entity
@Table(name="words")
public class Word {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String word;
    private String partOfSpeech;
    private Integer wordLength;
    private String pronunciation;
    private String pronunciationLink;

    @Column
    @GeneratedValue(strategy = GenerationType.TABLE)
    public void Word() {}

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

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
