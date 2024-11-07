import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';
import { IStudyProjects } from '../../interface/IStudyProjects.interface';

// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/multiversoonline.png',
      alt: 'Projeto Multiverso Online',
      title: 'Multiverso Online',
      heigth: '106px',
      width: '84px',
      description: '<p>Projeto desenvolvido para divulgação de serviços.</p><p>Site desenvolvido utilizando framework angular, typescript, html5, css3.</p><p>Desenvolvimento próprio de layout utilizando figma e utilizando css para design responsivo e animações para dar uma suavisada, além de deploy utilizando a hospedagem da hostinger.</p>',
      links: [
        {
          name: 'Conheça a Multiverso',
          href: 'https://multiversoonline.com.br/',
        },
      ],
    },

    {
      src: 'assets/img/projects/maestro-abm.png',
      alt: 'Projeto Maestro ABM',
      title: 'Maestro ABM',
      heigth: '70px',
      width: '238px',
      description: '<p>Projeto desenvolvido para simplificar vendas complexas</p><p>Plataforma desenvolvida utilizando angular 8, typescript, html5, css3, scss, bootstrap, integração de Api. </p><p>Desenvolvido a partir de protótipo em figma e seguindo padrões de de UX. utilizando a esteira da AWS como sistema CI/CD.</p>',
      links: [
        {
          name: 'Conheça a Maestro ABM',
          href: 'https://app.maestroabm.com/login',
        },
      ],
    },
    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt: 'Projeto Vida FullStack',
    //   title: 'Vida FullStack',
    //   heigth: '51px',
    //   width: '100px',
    //   description: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p><p>Assumenda repellendus nobis vero expedita at magnam ducimus numquam soluta dolorem doloribus.</p><p>Commodi error quis maiores! Iste temporibus tempore vitae sapiente laborum.</p>',
    //   links: [
    //     {
    //       name: 'Conheça o Blog',
    //       href: 'https//vidafullstack.com.br',
    //     },
    //   ],
    // },
    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt: 'Projeto Vida FullStack',
    //   title: 'Vida FullStack',
    //   heigth: '51px',
    //   width: '100px',
    //   description: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p><p>Assumenda repellendus nobis vero expedita at magnam ducimus numquam soluta dolorem doloribus.</p><p>Commodi error quis maiores! Iste temporibus tempore vitae sapiente laborum.</p>',
    //   links: [
    //     {
    //       name: 'Conheça o Blog',
    //       href: 'https//vidafullstack.com.br',
    //     },
    //   ],
    // },
    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt: 'Projeto Vida FullStack',
    //   title: 'Vida FullStack',
    //   heigth: '51px',
    //   width: '100px',
    //   description: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p><p>Assumenda repellendus nobis vero expedita at magnam ducimus numquam soluta dolorem doloribus.</p><p>Commodi error quis maiores! Iste temporibus tempore vitae sapiente laborum.</p>',
    //   links: [
    //     {
    //       name: 'Conheça o Blog',
    //       href: 'https//vidafullstack.com.br',
    //     },
    //   ],
    // },
    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt: 'Projeto Vida FullStack',
    //   title: 'Vida FullStack',
    //   heigth: '51px',
    //   width: '100px',
    //   description: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p><p>Assumenda repellendus nobis vero expedita at magnam ducimus numquam soluta dolorem doloribus.</p><p>Commodi error quis maiores! Iste temporibus tempore vitae sapiente laborum.</p>',
    //   links: [
    //     {
    //       name: 'Conheça o Blog',
    //       href: 'https//vidafullstack.com.br',
    //     },
    //   ],
    // },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

  public arrayStudyProjects = signal<IStudyProjects[]>([
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto de lista de tarefas',
      title: 'Lista de tarefas',
      heigth: '106px',
      width: '84px',
      description: '<p>Projeto de estudo desenvolvido para refinamento das novas nomenculaturas do angular 18.</p><p>Sistema de lista de tarefas utilizando HTML5, SCSS, Angular 18 (Componentização, Inpu, Output, Interface, Signal), Typescrip, Dialog(SweetAlert2)</p><p> Desenvolvimento de projeto utilizando as novas diretrizes do angular 18 e aplicando boas praticas de desenvolvimento, além de deploy utilizando o github pages.</p>',
      links: [
        {
          name: 'Conheça a Lista de tarefas',
          href: 'https://thiagonascimento-dev.github.io/lista-de-tarefas/',
        },
        {
          name: 'Link github',
          href: 'https://github.com/ThiagoNascimento-Dev/lista-de-tarefas',
        },
      ],
    },
  ]);

  public openDialogStudyProjects(data: IStudyProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

}
