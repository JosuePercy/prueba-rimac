# Frontend Challenge

## **1. Introducción**
Este proyecto es una aplicación web desarrollada como parte de un reto técnico para Rimac Seguros. La aplicación está construida utilizando **React** con **TypeScript** y **Vite** como herramienta de construcción. El objetivo principal es proporcionar una experiencia de usuario fluida y eficiente para la cotización de seguros, permitiendo a los usuarios seleccionar planes personalizados y aplicar descuentos según sus necesidades.

### **Tecnologías utilizadas**
- **React**: Biblioteca para la construcción de interfaces de usuario.
- **TypeScript**: Lenguaje de programación tipado que mejora la calidad del código.
- **Vite**: Herramienta de construcción rápida para proyectos frontend.
- **Sass**: Preprocesador CSS para estilos más estructurados y reutilizables.
- **Zustand**: Biblioteca para la gestión de estado global.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
---

## **2. Estructura del proyecto**

El proyecto está organizado en carpetas para facilitar la escalabilidad y el mantenimiento.  
A continuación, se detalla la estructura principal:

```bash
src/
├── api/                      # Lógica para interactuar con la API (planes y usuarios)
│   ├── plan.ts               # Solicitudes relacionadas con los planes
│   ├── user.ts               # Solicitudes relacionadas con los usuarios
│
├── assets/                   # Archivos estáticos como imágenes y logos
│   ├── family.webp           # Imagen de la familia
│   ├── logo.png              # Logo principal
│   ├── logo2.png             # Logo alternativo
│
├── components/               # Componentes reutilizables
│   ├── footer/               # Footer de la aplicación
│   ├── form/                 # Formulario principal
│   ├── header/               # Header de la aplicación
│   ├── stepper/              # Componente de pasos (Stepper)
│
├── hooks/                    # Custom hooks
│   ├── usePlans.ts           # Hook para manejar la lógica de los planes
│
├── pages/                    # Páginas principales
│   ├── home/                 # Página de inicio
│   ├── plans/                # Página de selección de planes
│   ├── summary/              # Página de resumen
│
├── shared/                   # Recursos compartidos
│   ├── components/           # Componentes compartidos
│   │   ├── CheckboxField/    # Campo de checkbox
│   │   ├── DocumentField/    # Campo de documento
│   │   ├── PhoneField/       # Campo de teléfono
│   │   ├── Icons/            # Iconos reutilizables
│   ├── store/                # Gestión de estado global (Zustand)
│   │   ├── useFormStore.ts   # Estado del formulario
│   │   ├── usePlanStore.ts   # Estado de los planes
│   │   ├── useStepStore.ts   # Estado del paso actual
│   │   ├── useViewStore.ts   # Estado de la vista actual
│
├── types/                    # Tipos TypeScript para datos
│   ├── plan.ts               # Tipos relacionados con los planes
│   ├── user.ts               # Tipos relacionados con los usuarios
│
```

## **3. Principios y metodologías utilizadas**

## **Metodología BEM**

Se utilizó la metodología **Block Element Modifier (BEM)** para estructurar los estilos de los componentes. Esto asegura que los nombres de las clases sean claros y fáciles de mantener. Ejemplo:
```scss
.plan-list-card {
  &__header {
    &-container {
      &__name {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}
```
## **3. Componentes más importantes**
 - **PlanListCard**: Este componente muestra la información de un plan, incluyendo el nombre, el precio con descuento y el precio original tachado.
Es importante porque permite al usuario visualizar los detalles de cada plan y seleccionarlo.
- **Form**: El formulario es el punto de entrada para que el usuario ingrese sus datos personales y preferencias.
Es crucial para recopilar la información necesaria para la cotización.
- **Plans**: La página de selección de planes permite al usuario elegir entre diferentes opciones de seguros.
Implementa la lógica para aplicar descuentos y filtrar los planes según la edad del usuario.
- **Summary**: La página de resumen muestra los datos ingresados por el usuario y el plan seleccionado.
Es importante porque confirma la información antes de finalizar el proceso.

## **4. Instalación y Ejecución**
# 1. Clonar el repositorio
```git clone https://github.com/tuusuario/frontend-challenge.git```

# 2. Instalar dependencias
```npm install```

# 3. Ejecutar en modo desarrollo
```npm run dev```

# 4. Generar build de producción
```npm run build```

# 5. proyecto subido Vercel
```https://prueba-rimac-sigma.vercel.app/```

## **5. Conclusión**
Este proyecto demuestra cómo construir una aplicación web moderna utilizando tecnologías avanzadas como React, TypeScript y Vite. La estructura del proyecto está diseñada para ser escalable y fácil de mantener, mientras que los principios SOLID y la metodología BEM aseguran un código limpio y organizado. La aplicación proporciona una experiencia de usuario fluida, permitiendo a los usuarios cotizar seguros de manera eficiente y personalizada.

Este enfoque garantiza que el proyecto sea adaptable a futuros requerimientos y cambios, cumpliendo con los estándares de calidad esperados en un entorno profesional.