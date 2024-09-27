import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

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
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      heigth: '51px',
      width: '100px',
      description: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p><p>Assumenda repellendus nobis vero expedita at magnam ducimus numquam soluta dolorem doloribus.</p><p>Commodi error quis maiores! Iste temporibus tempore vitae sapiente laborum.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br/',
        },
      ],
    },

    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack 3',
      heigth: '51px',
      width: '100px',
      description: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p><p>Assumenda repellendus nobis vero expedita at magnam ducimus numquam soluta dolorem doloribus.</p><p>Commodi error quis maiores! Iste temporibus tempore vitae sapiente laborum.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br/',
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
}
