package com.nexshift.nexshift_backend.controller;

import com.nexshift.nexshift_backend.model.ContactMessage;
import com.nexshift.nexshift_backend.repository.ContactMessageRepository;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactMessageRepository contactRepository;

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping
    public String sendContactMessage(@Valid @RequestBody ContactMessage message) {
        contactRepository.save(message);

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo("company@gmail.com");//company mail
        mail.setCc("personal@gmail.com"); // optional shall be personal mail
        mail.setSubject("Message From NEX Shift");
        mail.setText("Name: " + message.getName() + "\nEmail: " + message.getEmail() + "\nMessage: " + message.getMessage());

        mailSender.send(mail);

        return "Message sent successfully!";
    }
}
