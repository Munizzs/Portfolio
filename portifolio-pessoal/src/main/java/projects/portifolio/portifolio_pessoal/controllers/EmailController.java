package projects.portifolio.portifolio_pessoal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projects.portifolio.portifolio_pessoal.models.EmailRequest;

@RestController
@RequestMapping("/send-email")
@CrossOrigin(origins = "http://localhost:5500")  // Permitir requisições do frontend
public class EmailController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("matheusmuniz082003@gmail.com");
            message.setSubject("New message from " + emailRequest.getName() + " | Portifólio");
            message.setText(emailRequest.getMessage());
            message.setFrom(emailRequest.getEmail());
            mailSender.send(message);
            return "{\"message\":\"Email enviado com sucesso!\"}";
        } catch (Exception e) {
            e.printStackTrace();  // Imprime a stack trace para depuração
            return "{\"message\":\"Houve um problema ao enviar o email.\"}";
        }
    }
}
