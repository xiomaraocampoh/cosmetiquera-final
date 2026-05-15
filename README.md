# Cosmetiquera — Tienda de belleza

Aplicación web (catálogo digital) para la evaluación práctica de Programación con Tecnologías Web: React, Vite y una API simulada en el cliente.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior (incluye `npm`)

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto [http://localhost:5173](http://localhost:5173)).

### Scripts útiles

| Comando        | Descripción                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Servidor de desarrollo con recarga   |
| `npm run build` | Compilación para producción (`dist`) |
| `npm run preview` | Vista previa de la build            |
| `npm run lint` | ESLint sobre el proyecto             |

## Rutas

| Ruta        | Página   |
| ----------- | -------- |
| `/`         | Inicio   |
| `/catalogo` | Catálogo |
| `/contacto` | Contacto |

## Estructura del proyecto

```
src/
├── assets/
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Catalog.jsx
│   └── Contact.jsx
├── services/
│   └── mockApi.js
├── App.jsx
├── main.jsx
└── index.css
```

## API simulada (`mockApi.js`)

No hay servidor HTTP: las funciones del cliente imitan latencia de red (~800 ms) y respuestas al estilo REST para practicar estados de carga, errores y formularios.

### Listar productos

Equivale conceptualmente a **GET** `/v1/products`.

**Respuesta exitosa (200):** arreglo de productos.

```json
[
  {
    "id": "P001",
    "name": "Serum Vitamina C Bioaqua",
    "brand": "Bioaqua",
    "category": "Cuidado Facial",
    "price": 15000,
    "image": "/assets/products/serum-bioaqua.jpg",
    "description": "Serum antioxidante e iluminador para el rostro."
  }
]
```

**Respuesta de error (500):** fallo simulado ocasional.

```json
{
  "error": "internal_server_error",
  "message": "Fallo interno al intentar cargar el catálogo de productos.",
  "field": "database_connection",
  "received": null
}
```

### Registrar solicitud de asesoría

Equivale conceptualmente a **POST** `/v1/leads`.

**Cuerpo de la petición:**

```json
{
  "fullName": "Nombre del cliente",
  "phone": "Número de teléfono",
  "interest": "Categoría de interés"
}
```

**Respuesta exitosa (201):**

```json
{
  "message": "Asesoría solicitada con éxito.",
  "leadId": "L-1715783200000"
}
```

**Respuesta de error (400):** validación cuando falta un campo obligatorio.

```json
{
  "error": "validation_failed",
  "message": "El campo phone es obligatorio para procesar la solicitud.",
  "field": "phone",
  "received": "null"
}
```

El valor de `field` puede ser `fullName`, `phone` o `interest` según el dato omitido.
