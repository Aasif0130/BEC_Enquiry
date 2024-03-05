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

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PaymentId")
    private Integer paymentId;

    @Column(nullable = false)
    private String paymentStatus;

    @Column(nullable = false)
    private Float totalAmt;

    @Column(nullable = false)
    private Date paymentDate;

    @Column(nullable = false)
    private String modeOfPayment;


    
}
    // Constructors, getters, setters, and other methods