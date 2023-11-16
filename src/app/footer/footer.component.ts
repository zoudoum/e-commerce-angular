import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyEmailServiceService } from '../my-email-service.service';
import { EmailData } from './EmailData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  formulaire: FormGroup;
  showElement:boolean=false
  constructor(private formBuilder: FormBuilder, private emailService: MyEmailServiceService) {
    this.formulaire = this.formBuilder.group({
      recepteur: ['', Validators.required],
      expediteur: ['', [Validators.required, Validators.email]],
      sujet: ['', Validators.required],
      contenu: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulaire.valid) {
      const emailData: EmailData = {
        recepteur: this.formulaire.value.recepteur,
        expediteur: this.formulaire.value.expediteur,
        sujet: this.formulaire.value.sujet,
        contenu: this.formulaire.value.contenu,
      };

      // Envoyez les données d'e-mail au service
      this.emailService.sendEmail(emailData).subscribe(
        (response: string) => {
          this.showElement=true;
          setTimeout(() => {
            this.showElement = false;
          }, 3000);
          console.log('Réponse du serveur :');
          // Effectuez des actions supplémentaires en fonction de la réponse du serveur
        },
        error => {
          console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
          // Gérez l'erreur en conséquence
        }
      );
    }
  }
}