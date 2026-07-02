# Шрифты / Fonts

## Подключение через Google Fonts (уже в CSS)
Шрифт Inter подключается автоматически через CDN Google Fonts в файле `css/styles.css`:
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
```
При наличии интернета ничего дополнительно делать не нужно.

## Локальная установка (для офлайн / продакшн)
Если нужна работа без интернета, скачайте файлы с сайта:
https://fonts.google.com/specimen/Inter

Скачайте веса: 400, 500, 600, 700, 800 в форматах woff2 и woff.

Разместите файлы в эту папку:
```
fonts/
  Inter-Regular.woff2
  Inter-Medium.woff2
  Inter-SemiBold.woff2
  Inter-Bold.woff2
  Inter-ExtraBold.woff2
```

Затем раскомментируйте блок @font-face в начале css/styles.css
и удалите строку @import url('https://fonts.googleapis.com/...')
