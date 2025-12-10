# INFORMATICA — muestra PDF → web

Rama: pdf-to-web

Contenido:
- index.html: página de muestra que embebe las primeras 3 páginas del PDF.
- styles.css / script.js: estilos y controles básicos (tema, tamaño de fuente, TOC).

Cómo añadir estos archivos a la rama pdf-to-web (local):
1. git fetch origin
2. git checkout -b pdf-to-web origin/pdf-to-web   # si la rama ya existe localmente, usa git checkout pdf-to-web
3. Copia los archivos (index.html, styles.css, script.js, README.md) en el directorio del repo.
4. git add index.html styles.css script.js README.md
5. git commit -m "pdf-to-web: agregar muestra inicial embebida (páginas 1-3)"
6. git push origin pdf-to-web

Qué haré a continuación (si me autorizas a empujar desde aquí):
- Extraer el texto y las imágenes de las primeras 2–3 páginas.
- Reemplazar las iframes por HTML semántico extraído (párrafos, títulos, imágenes).
- Subir la muestra ya convertida y optimizada.
- Tras tu revisión, completaré la conversión del resto del PDF.

Notas:
- La URL raw usada para el PDF es:
  https://raw.githubusercontent.com/ProfeMoishe/01/e6f1f74e1a58b6fda5bb0b19d0de99f4bbb4868e/INFORMATICA.pdf

End of contents.
