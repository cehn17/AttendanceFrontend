import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

// 1. IMPORTAR LOCALIZACIÓN DE NG-ZORRO
import { provideNzI18n, es_ES, NzI18nInterface } from 'ng-zorro-antd/i18n';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

// Importaciones de Angular i18n
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

// llama a la función para registrar los datos
registerLocaleData(es);

const customEs: NzI18nInterface = {
  ...es_ES,
  DatePicker: {
    ...es_ES.DatePicker,
    lang: {
      ...es_ES.DatePicker.lang,
      // AÑADE ESTA CLAVE CON TU TRADUCCIÓN (puedes elegir cualquier texto)
      rangeQuarterPlaceholder: ['Inicio de Cuatrimestre', 'Fin de Cuatrimestre'], 
    }
  }
};

export const appConfig: ApplicationConfig = {
  providers: [ // Aquí abre el array de providers
    // AÑADIR LOS PROVEEDORES DE LOCALIZACIÓN
    
    // 1. Para Angular (pipes, etc.)
    { provide: LOCALE_ID, useValue: 'es' },
    provideNzI18n(customEs),
    
    // 2. Para NG-ZORRO (componentes, como el calendario)
    //provideNzI18n(es_ES), 
    
    // Los proveedores que ya tenías:
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
  ] // Aquí cierra el array de providers
};