# SHIT Lab — Landing Page

Sitio one-page para SHIT Creative Lab. Stack: **Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion**.
Estética: *Editorial Brutalism* — alineada al Brandbook 2026.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
npm run preview  # sirve /dist localmente
```

## Configurar el formulario (HubSpot)

El formulario de contacto está listo para HubSpot pero **necesita dos valores**.
Abre `src/components/site/Contact.tsx` y rellena al inicio del archivo:

```ts
const HUBSPOT_PORTAL_ID = "TU_PORTAL_ID";  // ej. "12345678"
const HUBSPOT_FORM_GUID = "TU_FORM_GUID";  // ej. "a1b2c3d4-...."
```

Los obtienes en HubSpot → Marketing → Formularios → tu formulario → **Compartir / Insertar**.
Mientras estén vacíos, el formulario muestra un aviso y no envía.
Los campos enviados son: `firstname`, `company`, `message`, `budget` — créalos en tu formulario de HubSpot o ajusta los `name` en el código.

## Despliegue en GitHub Pages

1. Sube el repo a GitHub.
2. Settings → Pages → **Source: GitHub Actions**.
3. Cada push a `main` dispara `.github/workflows/deploy.yml`, que compila y publica `/dist`.

El workflow ya copia `index.html` a `404.html` (fallback SPA) y `vite.config.ts`
usa `base: "./"` (rutas relativas) — funciona tanto en una URL raíz como en sub-path.

### Dominio propio
Si usas `shitcreativelab.com`: añade un archivo `public/CNAME` con el dominio,
y configura el DNS según la guía de GitHub Pages.

## Despliegue en Vercel (alternativa)

Importa el repo en Vercel. Detecta Vite automáticamente. Sin configuración extra.

## Pendientes recomendados

- **og-image.jpg**: crear una imagen 1200×630 y ponerla en `/public/og-image.jpg`
  (referenciada en `index.html` para previews de redes sociales).
- **Fuentes de marca**: el sitio usa Anton + Newsreader (libres) como sustitutas de
  Formula Condensed y PP Editorial New. Si consigues las licencias, añade los
  archivos de fuente y ya están primero en el stack CSS de `src/index.css`.
- **Dominio en SEO**: las URLs canónicas/OG en `index.html` y `sitemap.xml`
  apuntan a `https://shitcreativelab.com/` — ajústalas si el dominio cambia.
