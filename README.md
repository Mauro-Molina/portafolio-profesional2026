# Mauro Molina — Premium Portfolio (Static)

Portfolio premium con Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion y Lenis.

Export estático listo para **GitLab Pages** con el dominio gratis de GitLab (`*.gitlab.io`). Las animaciones corren 100% en el cliente.

## Stack

- Next.js 15 (App Router) + `output: "export"`
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion + Lenis
- Lucide + React Icons
- GitHub API en **build time**
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
| `NEXT_PUBLIC_SITE_URL` | URL pública final (SEO / sitemap). En GitLab CI se calcula sola. |
| `NEXT_PUBLIC_BASE_PATH` | Subruta si GitLab sirve el sitio en `/nombre-del-repo`. En CI se calcula sola. |
| `GITHUB_USERNAME` | Usuario de GitHub para repos/stats |
| `GITHUB_TOKEN` | Token opcional (mejor rate limit en CI) |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Endpoint de Formspree/Getform (opcional) |

Sin `NEXT_PUBLIC_FORM_ENDPOINT`, el formulario abre el cliente de correo (`mailto:`).

## Publicar en GitLab Pages (dominio gratis)

El sitio queda en una URL `*.gitlab.io`. No hace falta dominio propio ni DNS.

### 1. Crea el proyecto en GitLab

1. Entra en [gitlab.com](https://gitlab.com) e inicia sesión.
2. **New project → Create blank project**.
3. Nombre sugerido: `portafolio`.
4. Visibility: **Public** (si es privado, el sitio no será visible para todo el mundo).
5. **No** marques “Initialize repository with a README”.

### 2. Sube este repositorio

En la raíz del proyecto (ajusta la URL al proyecto que acabas de crear):

```bash
git remote add gitlab https://gitlab.com/TU_USUARIO/portafolio.git
git add .
git commit -m "Publish static portfolio on GitLab Pages"
git push -u gitlab HEAD
```

La rama actual es `master`. GitLab la tomará como rama por defecto si es el primer push.

### 3. Variables CI (opcional)

En GitLab: **Settings → CI/CD → Variables**:

| Variable | Obligatorio | Ejemplo |
| --- | --- | --- |
| `GITHUB_TOKEN` | No | Token de GitHub con scope `public_repo` (sube el rate limit) |
| `NEXT_PUBLIC_FORM_ENDPOINT` | No | `https://formspree.io/f/xxxx` |

`GITHUB_USERNAME` ya vale `mauromolina` en el pipeline.

### 4. Espera el pipeline

1. Ve a **Build → Pipelines**.
2. El job `pages` instala, construye el export estático y publica.
3. Cuando esté verde, ve a **Deploy → Pages**.
4. Abre la URL que GitLab muestra (algo como `https://TU_USUARIO.gitlab.io/portafolio/` o un dominio único `https://portafolio-TU_USUARIO-xxxx.gitlab.io`).

### 5. URL clásica `usuario.gitlab.io/repo` (opcional)

GitLab a veces activa **Use unique domain**. Si prefieres `https://TU_USUARIO.gitlab.io/portafolio/`:

1. **Deploy → Pages**
2. Desactiva **Use unique domain**
3. Vuelve a lanzar el pipeline (**Build → Pipelines → Run pipeline**)

El CI detecta solo si hace falta `basePath`.

## Assets a reemplazar

- `public/images/profile.svg` → tu foto
- `public/projects/*.svg` → screenshots reales
- `public/cv/Mauro-Molina-CV.pdf` → tu CV
- `public/og.svg` → imagen Open Graph
- Datos en `src/data/site.ts`

## Arquitectura

```
src/
  app/           # App Router + SEO
  components/    # UI, layout, effects, providers
  sections/      # Secciones de la página
  hooks/         # Magnetic, mouse, media, scroll
  lib/           # utils, github, seo, i18n, paths
  data/          # Contenido CMS-ready
  types/         # TypeScript types
out/             # Salida estática tras `npm run build`
```
