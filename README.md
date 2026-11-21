# Mahui Tech

Landing de Mahui Tech para presentar servicios de software a medida, diseño web, automatización e implementaciones de IA.

## Desarrollo local

Requiere Node.js 20.9 o superior y npm.

```sh
npm ci
npm run dev
```

Abrí [localhost:3000](http://localhost:3000).

## Reservas

Copiá `.env.example` a `.env.local` y asigná a `NEXT_PUBLIC_BOOKING_URL` la URL pública de la agenda. El botón de reserva se muestra cuando la variable está configurada. Definila antes de compilar para producción, ya que se incorpora al sitio durante el build.

## Compilación y despliegue

```sh
npm ci
npm run build
```

Publicá el contenido de `out/` en un hosting estático. En una plataforma de despliegue, configurá `npm run build` como comando de compilación y `out` como directorio de salida.

## Estructura

| Archivo | Responsabilidad |
| --- | --- |
| `app/page.jsx` | Contenido y secciones de la landing |
| `app/layout.jsx` | Idioma y metadatos |
| `app/globals.css` | Estilos, diseño adaptable y animaciones con soporte para movimiento reducido |
| `next.config.mjs` | Configuración de la exportación estática |

## Cambios

Antes de subir cambios, ejecutá `npm run build`. Usá Conventional Commits en inglés, por ejemplo `feat: add a project case study` o `fix: improve mobile navigation`.

## Datos para publicar

- El correo de contacto es `info@mahuitech.es`. Activa el buzón antes de publicar. Usa `CONTACT_EMAIL` si quieres mostrar otra dirección en la web.
- En Netlify, activa **Forms → Enable form detection** y vuelve a desplegar. Comprueba que aparece el formulario `contacto`, añade `info@mahuitech.es` en **Forms → Submission notifications** y confirma el destinatario si Netlify lo solicita. Envía una consulta de prueba y comprueba que aparece en el panel y llega al buzón.
- Completa el titular, NIF y domicilio con `LEGAL_OWNER`, `LEGAL_TAX_ID` y `LEGAL_ADDRESS` en las variables de compilación de Netlify. Los valores se incluyen en el HTML del aviso legal y la política de privacidad al volver a desplegar. Revisa ambos textos con la gestoría antes de hacer pública la web.
- El proyecto carece de analítica y scripts publicitarios. Confirma con la gestoría qué cookies introduce el alojamiento y revisa el consentimiento si añades servicios que usen cookies no esenciales.
