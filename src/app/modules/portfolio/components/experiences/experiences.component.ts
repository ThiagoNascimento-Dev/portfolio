import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Fron-end",
        p: "Maestro ABM | Abr 2022 - Mai 2024"
      },
      text: "<p>Durante meu periodo na Maestro ABM de Abril de 2022 a Maio de 2024, atuei como desenvolvedor angular, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, TypeScript, Angular 2+, bootstrap e figma.</p><p>Além disso, minha experiência abrange a integração com API</p><p>Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando Angular, como parte do nosso compromisso com a eficiência e a qualidade do código.</p>"
    },
    {
      summary: {
        strong: "Desenvolvedor Fron-end",
        p: "DeployUX | Out 2020 - Abr 2022"
      },
      text: "<p>Durante meu periodo na DeployUX de Outubro de 2020 a Abril de 2022, atuei como desenvolvedor angular, liderando a equipe de desenvolvimento Front-end e desenvolvendo o front varios sites, landingpages e alguns sistemas.</p><p>Minhas responsabilidades no front-end incluíram o uso de Html5, Css3, Javascript, TypeScript, Angular</p><p>Além disso, utilizava ferramentas como GitLab, GitHub e Scrum.</p>"
    },
  ]);
}
