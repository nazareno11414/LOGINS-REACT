# Team Mercado Inteligente · Login del Dash

Pantalla de acceso al **panel de Team Mercado Inteligente**, la herramienta de gestión para vendedores de Mercado Libre. Hecha con **React 19** y **Vite**, con un diseño oscuro de acentos azul y violeta, adaptada a computadora, tablet y celular.

Por ahora es solo la pantalla: no hay backend ni autenticación real (ver [Estado del proyecto](#estado-del-proyecto)).

![Login del Dash](docs/login.png)

## Qué incluye

- **Formulario de acceso** con usuario y contraseña, y un botón para **mostrar u ocultar la contraseña**.
- **Validación de campos**: revisa primero el usuario y después la contraseña. Si alguno está vacío, aparece un mensaje de error debajo del botón **Ingresar**.
- **Portada de marca** a la izquierda: titular, bajada y copyright sobre una foto de un equipo de trabajo.
- **Tarjeta de login** con el logo de Team Mercado Inteligente.
- **Contacto con el administrador** por WhatsApp, para quien tenga problemas para ingresar.
- **Responsive**, con la portada oculta en pantallas chicas (ver más abajo).
- **Movimiento reducido**: se quitan las transiciones de campos y botones si la persona lo pide en su sistema.

## Capturas

### Tablet

En pantallas de hasta 900 px se oculta la portada y el formulario queda solo, centrado.

![Login en tablet](docs/login-tablet.png)

### Celular

![Login en celular](docs/login-mobile.png)

### Validación

Si un campo está vacío, el error aparece debajo del botón.

![Estado de error](docs/login-error.png)

## Cómo correrlo

Necesitás [Node.js](https://nodejs.org) (se probó con la versión 24) y [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Se abre en `http://localhost:5173`.

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo con recarga automática |
| `pnpm build` | Genera la versión de producción en `dist/` |
| `pnpm preview` | Sirve localmente la versión de producción |
| `pnpm lint` | Revisa el código con ESLint |

## Estructura

```
src/
├── main.jsx                      # Punto de entrada
├── LoginApp.jsx                  # Arma las dos mitades de la pantalla
└── assets/
    ├── components/
    │   ├── LadoIzquierdo.jsx     # Portada: titular, bajada y copyright
    │   └── LadoDerecho.jsx       # Logo, formulario, validación y contacto
    ├── imgs/                     # Logo, fondo e íconos
    └── styles/
        ├── style_login.css       # Fuentes y layout general
        ├── style_ladoizq.css     # Portada
        └── style_loginderecho.css # Tarjeta y formulario
docs/                             # Capturas de este README
```

## Diseño

### Colores

| Nombre | Valor | Uso |
|---|---|---|
| Noche | `#010214` | Fondo general |
| Tarjeta | `#081B30` → `#070E20` → `#100C24` | Degradé de la tarjeta de login |
| Campo | `#090F1E` | Relleno de los campos |
| Botón | `#00A9DF` → `#176CF0` → `#7950E6` | Degradé del botón **Ingresar** |
| Blanco | `#F6F8FF` | Titular de la tarjeta |
| Gris | `#9CAEC9` | Textos secundarios |
| Celeste | `#83C7FF` | Enlace de contacto |
| Rosa | `#FFADBF` | Mensaje de error |

### Tipografía

[**DM Sans**](https://fonts.google.com/specimen/DM+Sans) para textos, etiquetas y botones, y [**Fredoka**](https://fonts.google.com/specimen/Fredoka) para el titular de la portada. Se cargan desde Google Fonts en `style_login.css`.

### Responsive

| Pantalla | Qué pasa |
|---|---|
| **Más de 900 px de ancho** | Dos mitades: la portada a la izquierda y el formulario a la derecha. |
| **900 px de ancho o menos** | Se oculta la portada y queda solo el formulario. |
| **550 px de ancho o menos** | Tarjeta con menos relleno, para aprovechar el ancho del celular. |
| **820 px de alto o menos** | Logo más chico y menos espacio entre elementos, para que entren el error y el contacto. |

## Estado del proyecto

Es la **pantalla de acceso (front)**. Todavía falta:

- **Conectar la autenticación.** Hoy el formulario solo valida que los campos no estén vacíos; no hay llamada a un servidor ni sesión.
- **Mensajes de error más específicos** (usuario o contraseña incorrectos) cuando exista el backend.

## Tecnologías

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8
- CSS puro, sin librerías de estilos
- [ESLint](https://eslint.org)

---

© 2026 · Desarrollado por Mercado Inteligente
