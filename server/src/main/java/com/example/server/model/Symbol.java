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
    private Boolean palmFaceIn;

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

    public Boolean getPalmFaceIn() {
        return palmFaceIn;
    }

    public void setPalmFaceIn(Boolean palmFaceIn) {
        this.palmFaceIn = palmFaceIn;
    }

    public String getImageExample() {
        return imageExample;
    }

    public void setImageExample(String imageExample) {
        this.imageExample = imageExample;
    }
}
