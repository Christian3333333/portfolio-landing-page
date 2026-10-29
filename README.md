# Portfolio — Christian Cabanillas

Landing de una sola página para reclutadores: estrategia de producto, productos de IA y diseño. El sitio está en inglés.

## Tecnologías

| Capa | Qué usa |
| --- | --- |
| Aplicación | Next.js 16 (App Router) y React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 4, con tokens de color en `app/globals.css` |
| Componentes | shadcn, Base UI, `class-variance-authority`, `clsx` y `tailwind-merge` |
| Iconos | Lucide |
| Tipografía | Plus Jakarta Sans para títulos y DM Sans para texto, con `next/font` |
| Imágenes | `next/image`. Las fotos de casos viven en Vercel Blob |
| Analítica | Vercel Analytics, solo en producción |
| Paquetes | pnpm |

Las secciones son Navbar, Hero, Approach, Selected Outcomes, Design Principles, Systems, About y contacto.

## Animaciones

El movimiento lo hace Framer Motion. El CSS solo cubre el scroll suave, la barra al hacer scroll y el zoom de las fotos.

El hero entra al cargar. Cada línea usa la variante `fadeUp`: empieza invisible y 24 px más abajo, y sube en 0,6 s. El retraso entre líneas es 0,12 s. La curva es el cubic-bezier `[0.25, 0.46, 0.45, 0.94]`.

El resto aparece al entrar en pantalla, con `whileInView` y `viewport.once`, así cada bloque se anima una sola vez. El margen negativo (`-60px` o `-80px`) adelanta la entrada antes de que la sección quede del todo visible.

En Approach, el contenedor usa `staggerChildren: 0.1`: Understand, Reframe, Prioritize, Build y Scale entran en fila. En Selected Outcomes, cada tarjeta espera `índice × 0,08 s`. Al pasar el cursor, la tarjeta sube 4 px (`whileHover`) y la foto escala a 105 % con una transición de Tailwind de 500 ms.

La barra fija cambia a navy con desenfoque mediante una clase de CSS cuando el scroll pasa de 20 px. El subrayado de los enlaces crece en ancho. El menú móvil abre y cierra con `AnimatePresence`. Los anclas usan `scrollIntoView({ behavior: 'smooth' })`, y el documento tiene `scroll-behavior: smooth`.

## Planeamiento

1. **Discovery de lo que un recruiter necesita saber.** Antes de escribir la página, se definió qué información tiene que encontrar alguien que evalúa un perfil: qué hace, cómo trabaja, qué resultados puede mostrar y cómo contactarlo.
2. **Definición de contenido.** Con eso se armó el orden de la página: presentación, método, casos, principios, sistemas y contacto. Cada bloque responde a una de esas preguntas.
3. **Testeo de contenido.** El texto se probó contra esa lectura de recruiter, para ver si el orden y las piezas alcanzaban antes de pasar al diseño.
4. **Diseño en alta fidelidad.** La página se dibujó completa, con la estructura, el color navy y la jerarquía que después se implementó.
5. **Implementación con v0, GitHub y Cursor.** v0 generó la primera versión de la landing (el layout declara `generator: v0.app`). El código quedó en GitHub. Cursor se usó para seguir la página: contenido, enlaces, ajustes de layout y este repositorio.

## Cómo correrlo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).
