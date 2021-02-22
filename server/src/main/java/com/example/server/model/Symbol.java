package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name = "symbols")
public class Symbol {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Boolean useOnlyOneHand;

    @Column
    private Boolean palmStartFaceIn;

    @Column
    private String imageExample;

    public void Symbol() {}

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getUseOnlyOneHand() {
        return useOnlyOneHand;
    }

    public void setUseOnlyOneHand(Boolean useOnlyOneHand) {
        this.useOnlyOneHand = useOnlyOneHand;
    }

    public Boolean getStartPalmFaceIn() {
        return palmStartFaceIn;
    }

    public void setPalmStartFaceIn(Boolean palmStartFaceIn) {
        this.palmStartFaceIn = palmStartFaceIn;
    }

    public String getImageExample() {
        return imageExample;
    }

    public void setImageExample(String imageExample) {
        this.imageExample = imageExample;
    }
}
