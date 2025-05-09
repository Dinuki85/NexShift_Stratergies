
# 🚀 NEX Shift Strategies Pvt Ltd – Backend (Spring Boot)

> ⚙️ Backend services for secure contact messaging, email delivery, and database storage.

This is the **Spring Boot-based backend** for **NEX Shift Strategies Pvt Ltd**, providing secure endpoints for contact forms, email delivery, and optional database integration.

---

## 🔐 Security First

- ✅ Input validation via `@Valid`, `@NotBlank`, etc.
- ✅ Global exception handling with `@RestControllerAdvice`
- ✅ SMTP email with secure app passwords
- ✅ Secure DB connection using `application.properties`
- ✅ CORS configured for frontend origin

---

## 🏗️ Tech Stack

| Technology       | Use Case                                  |
|------------------|--------------------------------------------|
| Spring Boot      | RESTful backend server                     |
| Spring Web       | API development                            |
| MySQL            | Relational database                        |
| JavaMailSender   | SMTP email sending                         |
| Maven            | Build & dependency management              |

---

## 📁 Project Structure

```
nexshift-backend/
├── src/main/java/com/nexshift/nexshift_backend/
│   ├── controller/
         └── SecurityConfig.java
│   ├── controller/
│   │   └── ContactController.java
│   ├── model/
│   │   └── ContactMessage.java
         └── User.java
│   ├── repository/
│   │   └── ContactRepository.java
         └── UserRepository.java
│   ├── config/
│   │   └── SecurityConfig.java (if JWT or Spring Security used)
│   └── NexshiftBackendApplication.java
├── resources/
│   ├── application.properties
│   └── schema.sql (optional)
└── pom.xml
```

---

## 📨 Features

- 🔒 Receive secure POST requests from frontend
- 📧 Sends contact emails to company email with CC
- 🗄️ Stores messages in MySQL (optional or required)
- ⚠️ Validation with helpful error messages
- 🌍 CORS enabled to talk with frontend securely

---


## 🔐 Tips for Secure Deployment

| 🔒 Step | Why |
|--------|-----|
| Use \`.env\` or secret manager | Never expose passwords |
| Use dedicated DB users | Avoid \`root\` in production |
| Use HTTPS endpoints | Always |
| Restrict frontend origin in \`@CrossOrigin\` | Prevent cross-site injection |
| Enable logging & rate limiting | For protection from abuse |

---

## 📄 License

This project is proprietary and licensed to **NEX Shift Strategies Pvt Ltd**.  
See the [LICENSE](./LICENSE) file for full terms.


