package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String userName;

    @Column
    private String password;

    @Column
    private Boolean requestVisualAid;

    @Column
    private Boolean requestAudioAid;

    public void User() {}

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getRequestVisualAid() {
        return requestVisualAid;
    }

    public void setRequestVisualAid(Boolean requestVisualAid) {
        this.requestVisualAid = requestVisualAid;
    }

    public Boolean getRequestAudioAid() {
        return requestAudioAid;
    }

    public void setRequestAudioAid(Boolean requestAudioAid) {
        this.requestAudioAid = requestAudioAid;
    }
}
