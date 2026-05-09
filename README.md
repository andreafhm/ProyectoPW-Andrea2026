# Proyecto3 — Curso Playwright + Cucumber

Proyecto de automatización de pruebas E2E utilizando [Playwright](https://playwright.dev/) con integración de [Cucumber](https://cucumber.io/) para pruebas BDD (Behavior Driven Development).

---

## Estructura del proyecto

```
Proyecto3/
│
├── .github/
│   └── workflows/
│       └── playwright.yml        # Pipeline de CI/CD para GitHub Actions
│
├── tests/
│   ├── features/
│   │   └── login.feature         # Escenarios BDD en lenguaje Gherkin
│   │
│   ├── steps/
│   │   └── login.steps.ts        # Implementación de los pasos Gherkin
│   │
│   ├── pages/
│   │   └── LoginPage.ts          # Page Object Model para la página de login
│   │
│   ├── hooks/
│   │   └── hooks.ts              # Hooks globales de Cucumber (Before/After)
│   │
│   ├── support/
│   │   ├── world.ts              # Contexto compartido entre steps (CustomWorld)
│   │   └── browser.ts            # Configuración e inicialización del navegador
│   │
│   └── data/
│       └── users.json            # Datos de prueba (credenciales, etc.)
│
├── reports/
│   ├── cucumber-report.json      # Reporte generado en formato JSON
│   └── html-report/              # Reporte generado en formato HTML
│
├── .gitignore
├── cucumber.js                   # Configuración de Cucumber
├── package.json                  # Dependencias y scripts del proyecto
├── package-lock.json
├── playwright.config.ts          # Configuración global de Playwright
├── tsconfig.json                 # Configuración de TypeScript
└── README.md
```

---

## Descripción de carpetas

| Carpeta / Archivo         | Propósito                                                                 |
|---------------------------|---------------------------------------------------------------------------|
| `tests/features/`         | Archivos `.feature` con los escenarios escritos en Gherkin                |
| `tests/steps/`            | Implementación TypeScript de cada paso (`Given`, `When`, `Then`)          |
| `tests/pages/`            | Page Object Models — encapsulan la interacción con cada página            |
| `tests/hooks/`            | Hooks de ciclo de vida de Cucumber (`Before`, `After`, `BeforeAll`, etc.) |
| `tests/support/world.ts`  | Clase `CustomWorld` que comparte `page`, `browser` y `context` entre steps|
| `tests/support/browser.ts`| Función para inicializar el navegador Playwright                          |
| `tests/data/`             | Datos de prueba en JSON (usuarios, configuración, etc.)                   |
| `reports/`                | Reportes generados tras la ejecución de los tests                         |
| `cucumber.js`             | Configuración de rutas, formatos y paralelismo de Cucumber                |
| `tsconfig.json`           | Configuración del compilador TypeScript                                   |

---

## Dependencias

| Paquete              | Versión   | Tipo          |
|----------------------|-----------|---------------|
| `@playwright/test`   | ^1.59.1   | devDependency |
| `@types/node`        | ^25.6.2   | devDependency |

> Para el stack Cucumber, instalar adicionalmente:
> ```bash
> npm install --save-dev @cucumber/cucumber ts-node
> ```

---

## Configuración de Playwright (`playwright.config.ts`)

- **Directorio de tests:** `./tests`
- **Ejecución en paralelo:** habilitada
- **Reporter:** `html`
- **Tracing:** activado en el primer reintento (`on-first-retry`)
- **Reintentos en CI:** 2

### Navegadores configurados

| Proyecto   | Dispositivo            |
|------------|------------------------|
| chromium   | Desktop Chrome         |
| firefox    | Desktop Firefox        |
| webkit     | Desktop Safari (macOS) |

---

## Comandos útiles

```bash
# Instalar dependencias
npm install

# Instalar navegadores de Playwright
npx playwright install

# Ejecutar tests con Playwright
npx playwright test

# Ejecutar tests con Cucumber
npx cucumber-js

# Ejecutar en modo headless desactivado (ver navegador)
HEADLESS=false npx cucumber-js

# Abrir reporte HTML de Playwright
npx playwright show-report

# Abrir reporte HTML de Cucumber
open reports/html-report/index.html
```

---

## CI/CD

El proyecto incluye un workflow de GitHub Actions (`.github/workflows/playwright.yml`) que ejecuta los tests automáticamente en cada push o pull request.
