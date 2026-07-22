# Sitio Web - Daniela, Psicóloga Profesional

Sitio web profesional para una psicóloga en Chile. Incluye información sobre servicios, horarios, calendario interactivo para agendar citas y formulario de contacto.

## 🌟 Características

- ✅ Biografía y credenciales profesionales
- ✅ Listado completo de servicios
- ✅ Horarios y tarifas
- ✅ Calendario interactivo para agendar citas
- ✅ Formulario de contacto
- ✅ Diseño responsive (mobile-first)
- ✅ Hosting gratuito en GitHub Pages
- ✅ Optimizado para SEO

## 🛠️ Tecnologías

- **Next.js 14** - Framework React moderno
- **TypeScript** - Tipado estático
- **CSS Modules** - Estilos aislados
- **date-fns** - Manejo de fechas

## 📦 Instalación local

1. Clona el repositorio:
```bash
git clone https://github.com/agustsanchez18-pixel/daniela.git
cd daniela
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📝 Personalización

### Editar información personal

**Archivo:** `components/About.tsx`
- Actualiza tu biografía
- Añade tus credenciales reales

**Archivo:** `components/Services.tsx`
- Personaliza los servicios que ofreces

**Archivo:** `components/Schedule.tsx`
- Modifica horarios
- Ajusta tarifas según tu valor

**Archivo:** `components/Contact.tsx`
- Actualiza teléfono y email reales
- Modifica dirección en Santiago

### Colores

Edita `app/globals.css`:
```css
:root {
  --primary: #4f46e5;        /* Azul principal */
  --primary-dark: #4338ca;   /* Azul oscuro */
  --secondary: #ec4899;      /* Rosa */
  --text-dark: #1f2937;      /* Texto oscuro */
  --text-light: #6b7280;     /* Texto claro */
  --bg-light: #f9fafb;       /* Fondo claro */
}
```

## 🚀 Despliegue en GitHub Pages

### 1. Habilitar GitHub Pages

Ve a **Settings → Pages** en tu repositorio y selecciona:
- Source: `GitHub Actions`

### 2. Crear archivo de workflow

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### 3. Commit y push

```bash
git add .
git commit -m "Initial deployment setup"
git push origin main
```

Tu sitio estará disponible en: `https://agustsanchez18-pixel.github.io/daniela/`

## 📋 Estructura del proyecto

```
daniela/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Schedule.tsx
│   ├── Calendar.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── styles/
│   ├── Header.module.css
│   ├── Hero.module.css
│   ├── About.module.css
│   ├── Services.module.css
│   ├── Schedule.module.css
│   ├── Calendar.module.css
│   ├── Contact.module.css
│   └── Footer.module.css
├── package.json
├── next.config.js
└── tsconfig.json
```

## ⚙️ Configuración

### Datos de contacto

Actualiza tu información en `components/Contact.tsx` y `components/Footer.tsx`:
- Teléfono
- Email
- Ubicación

### Calendario de disponibilidad

Los horarios disponibles se pueden personalizar en `components/Calendar.tsx`:
- Rango de fechas disponibles
- Horas de atención
- Intervalo de citas

## 📞 Integración de formularios

Los formularios actualmente guardan datos en la consola del navegador. Para guardarlos, necesitas:

1. **Backend simple (Node.js)** - Guardar en archivo JSON
2. **Firebase** - Base de datos en la nube
3. **Formspree** - Servicio de formularios
4. **EmailJS** - Enviar emails directamente

Ej. con Formspree:
```tsx
<form action="https://formspree.io/f/TU_ID" method="POST">
  {/* inputs */}
</form>
```

## 🔒 Privacidad y seguridad

- Usa HTTPS siempre (GitHub Pages lo proporciona automáticamente)
- No guardes datos sensibles en el cliente
- Considera GDPR y leyes de privacidad de datos personales

## 🎨 Mejoras futuras

- [ ] Sistema de reservas automático integrado
- [ ] Blog de artículos sobre psicología
- [ ] Testimonios de pacientes
- [ ] Integración con calendario (Google Calendar, Calendly)
- [ ] Modo oscuro
- [ ] Soporte para múltiples idiomas

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usar, modificar y distribuir.

## 📧 Contacto

Para preguntas sobre el sitio web, contacta a Daniela directamente.

---

**Hecho con ❤️ para tus pacientes**
