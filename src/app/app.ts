import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Dados do Portfólio
  public readonly skills = signal(['C#', '.NET Core', 'Angular', 'SQL Server', 'Azure']);

  public readonly experiencias = signal([
    {
      empresa: 'TechDog',
      cargo: 'Dev .NET',
      periodo: '2024 – Atual',
      descricao: 'Desenvolvimento de novas funcionalidades e integrações.'
    },
    {
      empresa: 'Bludata',
      cargo: 'Dev .NET',
      periodo: '2024',
      descricao: 'Manutenção de APIs e Front-End.'
    },
    {
      empresa: 'Empresômetro',
      cargo: 'Dev Júnior',
      periodo: '2022 – 2024',
      descricao: 'Migração para .NET 6 e APIs críticas.'
    }
  ]);

  // FUNÇÃO 1: Rolagem suave para a seção de experiências
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
}