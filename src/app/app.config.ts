// src/app/app.config.ts

import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core'; // LOCALE_ID ya lo tienes
import { provideRouter } from '@angular/router';

// 1. IMPORTAR LOCALIZACIÓN DE NG-ZORRO (¡FALTABA ESTO!)
import { provideNzI18n, es_ES } from 'ng-zorro-antd/i18n'; 

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

// Importaciones de Angular i18n
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es'; 

// llama a la función para registrar los datos
registerLocaleData(es); 

export const appConfig: ApplicationConfig = {
  providers: [
    // 2. AÑADIR LOS PROVEEDORES DE LOCALIZACIÓN
    // Para Angular (pipes, etc.)
    { provide: LOCALE_ID, useValue: 'es' },
    // Para NG-ZORRO (componentes, como el calendario)
    provideNzI18n(es_ES),

    // Los proveedores que ya tenías:
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
  ]
};