package com.bec.aasif.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="_courses")
public class Course {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;

    @Column(nullable=false)
    private String courseName;

    @Column(nullable=false)
    private String courseDescription; 
    @Column(nullable=false)
    private String details;

    @Column(nullable=false)
    private float price;

    @Column(nullable=false)
    private String duration;
}
