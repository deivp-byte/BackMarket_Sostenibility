# Back Market y sostenibilidad

Sitio web informativo que explora la relación entre Back Market, la economía circular y la sostenibilidad de los dispositivos electrónicos. Incluye contenidos sobre el impacto ambiental, los criterios ASG (ambientales, sociales y de gobernanza), la empresa y una sección de contacto.

La aplicación es un proyecto frontend demostrativo: no dispone de una API o backend. El formulario de contacto es parte de la interfaz y no envía mensajes a un servicio.

## Secciones

- **Inicio** (`/`): presentación e introducción al impacto de la economía circular.
- **Empresa** (`/empresa`): motivos para apostar por el reacondicionamiento y datos destacados.
- **Cambio climático** (`/canvi-climatic`): impacto del sector tecnológico, riesgos y posibles respuestas.
- **ASG** (`/asg`): contenidos ambientales, sociales y de gobernanza.
- **Contacto** (`/contact`): formulario visual, información de contacto y preguntas frecuentes.

La interfaz está disponible en catalán, español e inglés. El catalán es el idioma inicial.

## Tecnologías

- Vue 3 y Vue Router
- Vite
- Vue I18n
- Tailwind CSS 4
- Motion One para Vue
- Lucide Vue Next para iconos

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0`
- pnpm

## Puesta en marcha

Instala las dependencias:

```sh
pnpm install
```

Inicia el servidor de desarrollo:

```sh
pnpm dev
```

Vite mostrará en la terminal la dirección local donde puedes abrir la aplicación.

## Compilación y previsualización

Genera la versión de producción en `dist/`:

```sh
pnpm build
```

Previsualiza localmente esa compilación:

```sh
pnpm preview
```

Al desplegarla como sitio estático, configura el alojamiento para servir `index.html` como fallback de las rutas de Vue Router.

## Estructura principal

```text
src/
├── Pages/         # Vistas de inicio, empresa, clima, ASG y contacto
├── components/    # Componentes compartidos e interfaz
├── locales/       # Traducciones ca.json, es.json y en.json
├── assets/        # Estilos globales
├── i18n.js        # Configuración de idiomas
├── router.js      # Rutas de la aplicación
└── main.js        # Inicialización de Vue
```
