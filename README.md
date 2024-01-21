# Проектная работа Mesto
1. Repositorie: https://github.com/slavinskiyboris/mesto-project-ff
2. GitHub Pages: https://slavinskiyboris.github.io/mesto-project-ff/

---

## Установка и запуск проекта

Данный проект использует [Node.js](https://nodejs.org/) и [npm](https://www.npmjs.com/). Убедитесь, что они установлены на вашем компьютере.

### Шаги для запуска:

1. **Клонирование репозитория**

   Клонируйте репозиторий на ваш локальный компьютер:

   ```bash
   git clone git@github.com:slavinskiyboris/mesto-project-ff.git
   ```

2. **Установка зависимостей**

   Перейдите в каталог проекта и установите необходимые зависимости:

   ```bash
   cd <имя-каталога-проекта>
   npm install
   ```

   Это автоматически установит следующие пакеты:

    - `webpack` и `webpack-cli` для сборки модулей.
    - `webpack-dev-server` для локальной разработки.
    - `@babel/core` и `@babel/preset-env` для транспиляции JS.
    - `core-js` для полифилов.
    - `babel-loader` для интеграции Babel с Webpack.
    - `html-webpack-plugin` и `clean-webpack-plugin` для обработки HTML.
    - `css-loader`, `mini-css-extract-plugin`, `postcss-loader`, `autoprefixer`, `cssnano` для обработки CSS.

3. **Запуск проекта**

   После установки зависимостей запустите проект локально:

   ```bash
   npm run dev
   ```

   По умолчанию проект будет доступен по адресу [http://localhost:8080](http://localhost:8080).

### Сборка проекта

Для создания оптимизированной версии проекта выполните:

```bash
npm run build
```

Собранные файлы будут находиться в каталоге `dist`.