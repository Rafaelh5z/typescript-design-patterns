# Guía de Contribución

¡Gracias por tu interés en contribuir a TypeScript Design Patterns! 🎉

## Cómo Contribuir

### 🐛 Reportar Bugs

Si encuentras un error, por favor:

1. Verifica que el error no haya sido reportado anteriormente
2. Crea un issue describiendo:
   - Descripción clara del problema
   - Pasos para reproducir el error
   - Comportamiento esperado vs. comportamiento actual
   - Capturas de pantalla si es relevante

### 💡 Sugerir Mejoras

Para nuevas características o mejoras:

1. Abre un issue con la etiqueta "enhancement"
2. Describe claramente la mejora propuesta
3. Explica por qué sería útil
4. Proporciona ejemplos si es posible

### 🔧 Contribuir con Código

#### Configuración del Entorno

```bash
# Fork el repositorio
git clone https://github.com/TU_USUARIO/typescript-design-patterns.git
cd typescript-design-patterns

# Instala dependencias
npm install

# Ejecuta el build
npm run build
```

#### Proceso de Desarrollo

1. Crea una rama desde `main`:
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

2. Realiza tus cambios siguiendo las convenciones del proyecto

3. Asegúrate de que el código compile sin errores:
   ```bash
   npm run build
   npm run lint
   ```

4. Commit tus cambios:
   ```bash
   git commit -m "feat: agregar patrón Visitor"
   ```

5. Push a tu fork y crea un Pull Request

## Estándares de Código

### TypeScript
- Usa TypeScript estricto
- Interfaces para definir contratos
- Clases para implementaciones concretas
- JSDoc para documentar métodos públicos

### Estructura de Archivos
```
src/
├── [categoría]Patterns/
│   ├── [patrón]/
│   │   ├── index.ts
│   │   ├── [Componente].ts
│   │   └── [patrón].example
```

### Convenciones de Nombres
- **Clases**: PascalCase (`FurnitureFactory`)
- **Interfaces**: PascalCase con prefijo I opcional (`IBuilder`)
- **Variables/Métodos**: camelCase (`createChair`)
- **Archivos**: PascalCase para clases, camelCase para otros

### Documentación
Cada patrón debe incluir:
- Implementación completa en TypeScript
- Archivo `.example` con casos de uso
- Comentarios explicativos en el código
- JSDoc para métodos públicos

## Convenciones de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato/estilo
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests

Ejemplos:
```
feat: agregar patrón Command con ejemplos
fix: corregir implementación del patrón Singleton
docs: actualizar README con instrucciones de instalación
```

## Review Process

1. Todos los PRs requieren revisión antes de merge
2. El código debe pasar todas las verificaciones de CI
3. Debe incluir documentación apropiada
4. Los cambios grandes deben discutirse previamente en un issue

## Código de Conducta

- Sé respetuoso y constructivo
- Acepta críticas constructivas
- Enfócate en lo que es mejor para la comunidad
- Muestra empatía hacia otros miembros

## ¿Necesitas Ayuda?

- Crea un issue con la etiqueta "question"
- Revisa issues existentes
- Consulta la documentación del proyecto

¡Gracias por contribuir! 🚀
