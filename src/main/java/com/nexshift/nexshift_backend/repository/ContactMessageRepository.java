package com.nexshift.nexshift_backend.repository;

import com.nexshift.nexshift_backend.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
}
