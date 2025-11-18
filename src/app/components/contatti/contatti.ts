import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contatti',
  imports: [FormsModule],
  templateUrl: './contatti.html',
  styleUrls: ['./contatti.css'],
})
export class Contatti {

  name: string = '';
  email: string = '';
  object: string = '';
  message: string = '';

  showAlert: boolean = false;
  alertMessage: string = '';

  async send(name: string, email: string, object: string, message: string): Promise<void> {
    // Controllo campi vuoti
    if (!this.name.trim() || !this.email.trim() || !this.object.trim() || !this.message.trim()) {
      this.alertMessage = '❌ Devi compilare tutti i campi!';
      this.showAlert = true;
      return;
    }

    try {
      const response = await emailjs.send(
        "service_884q5m4",
        "template_9zggoca",
        {
          name: this.name,
          time: new Date().toLocaleString(),
          message: this.message,
          email: this.email,
          subject: this.object
        },
        { publicKey: 'lEcvSC2l4Fhqgg5ws' }
      );

      // Reset form
      this.name = '';
      this.email = '';
      this.object = '';
      this.message = '';

      this.alertMessage = '✅ Email inviata con successo!';
      this.showAlert = true;

    } catch (error) {
      console.error(error);
      this.alertMessage = '❌ Qualcosa è andato storto. Riprova più tardi.';
      this.showAlert = true;
    }
  }

  closeAlert() {
    this.showAlert = false;
  }
}
