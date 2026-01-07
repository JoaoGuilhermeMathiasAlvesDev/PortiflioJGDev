import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- ESSENCIAL

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // <--- SEM ISSO O @FOR NÃO FUNCIONA
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Use nomes idênticos ao que está no HTML
  protected readonly skills = signal(['C#', '.NET Core', 'Angular', 'SQL Server', 'Azure']);
  
  protected readonly experiencias = signal([
    { 
      empresa: 'TechDog – RJ', 
      
      cargo: 'Dev .NET', 
      periodo: 'Ago/2024 – Atual', 
      descricao: 'Projeto ConectEdu: novas funcionalidades e integrações.' 
    },
    { 
      empresa: 'Empresômetro – PR', 
      cargo: 'Dev Júnior', 
      periodo: 'Jan/2022 – Jan/2024', 
      descricao: 'Migração para .NET 6 e manutenção de APIs.' 
    }
  ]);
}