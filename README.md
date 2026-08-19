# Mauro Molina — Premium Portfolio (Static)

Portfolio premium con Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion y Lenis.

Export estático listo para **GitHub Pages** con el dominio gratis (`*.github.io`). Las animaciones corren 100% en el cliente.

## Stack

- Next.js 15 (App Router) + `output: "export"`
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion + Lenis
- Lucide + React Icons
- Contacto estático (`mailto:` o Formspree/Getform)

## Desarrollo

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build estático

```bash
npm run build
```

Genera la carpeta `out/` lista para hosting estático.

Vista previa local:

```bash
npm run preview
```

## Variables de entorno

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública final (SEO / sitemap). En GitHub Actions se calcula sola. |
| `NEXT_PUBLIC_BASE_PATH` | Subruta `/nombre-del-repo` en project Pages. En Actions se calcula sola. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Endpoint de Formspree/Getform (opcional) |

Sin `NEXT_PUBLIC_FORM_ENDPOINT`, el formulario abre el cliente de correo (`mailto:`).

## Publicar en GitHub Pages (dominio gratis)

El repo ya está en GitHub:

`https://github.com/Mauro-Molina/portafolio-profesional2026`

La URL pública será:

`https://mauro-molina.github.io/portafolio-profesional2026/`

No hace falta dominio propio ni DNS.

### 1. Commit y push

```bash
git add .
git commit -m "Deploy static portfolio to GitHub Pages"
git push origin master
```

### 2. Activa GitHub Pages

1. Abre el repo en GitHub.
2. **Settings → Pages**.
3. En **Source** elige **GitHub Actions**.
4. El repo debe ser **Public** (en el plan gratis, Pages de un repo privado no queda visible para todo el mundo).

### 3. Espera el workflow

1. Ve a la pestaña **Actions**.
2. Abre **Deploy GitHub Pages**.
3. Cuando `build` y `deploy` estén verdes, abre:

`https://mauro-molina.github.io/portafolio-profesional2026/`

La URL también aparece en **Settings → Pages**.

### 4. Variables opcionales

En **Settings → Secrets and variables → Actions** puedes añadir:

| Secret | Obligatorio | Para qué |
| --- | --- | --- |
| `NEXT_PUBLIC_FORM_ENDPOINT` | No | Formspree/Getform. Si no, el formulario usa `mailto:` |

### URL más corta (opcional)

Si quieres `https://mauro-molina.github.io/` sin el nombre del repo:

1. Renombra el repo a `Mauro-Molina.github.io` (**Settings → General → Repository name**).
2. Vuelve a lanzar el workflow (**Actions → Deploy GitHub Pages → Run workflow**).

El CI detecta solo si hace falta `basePath`.

## Assets a reemplazar

- `public/images/profile.svg` → tu foto
- `public/projects/*.svg` → screenshots reales
- `public/cv/Curriculum Profesional Mauro Molina.pdf` → tu CV
- `public/og.svg` → imagen Open Graph
- Datos en `src/data/site.ts`

## Arquitectura

```
src/
  app/           # App Router + SEO
  components/    # UI, layout, effects, providers
  sections/      # Secciones de la página
  hooks/         # Magnetic, mouse, media, scroll
  lib/           # utils, seo, i18n, paths
  data/          # Contenido CMS-ready
  types/         # TypeScript types
out/             # Salida estática tras `npm run build`
```
