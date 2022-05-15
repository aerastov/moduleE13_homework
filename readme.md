## Установка и настройка Webpack
Необходимо установить node.js (в комплекте npm)  
https://nodejs.org/en/download/  
Проверяем версию: ```npm -v```  
Создаем папку, в ней инициализируем проект npm:  
`npm init`  
Далее через терминал устанавливаем webpack:  
`npm install webpack webpack-cli --save-dev`  
Для включения в сборку css установим загрузчики:  
`npm i style-loader css-loader --save-dev`  
Чтобы css добавлялись не в тело файла js а отдельным файлом установим:  
`npm install  mini-css-extract-plugin  --save-dev`  

В корне создаем файл конфиг: `webpack.config.js`  
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                            esModule: true,
                            },
                        },
                    'css-loader',
                ], 
            }
        ]
    }
}
```
Описание конфига:  
https://webpack.js.org/configuration/  


Запустить сборку: `npx webpack`  
Запустить непрерывную сборку: `npx webpack --watch`  
Если в пакет `package.json` в объект `scripts` добавить строку `"build" : "webpack"`, то запускать сборку можно командой `npm run build`  

Восстановить модули по данным package.json могут команды:  
`npm install`  
или  
`yarn install`  
Установка yarn:  
https://yarnpkg.com/getting-started/install  


## Установка DevServer
`npm install webpack-dev-server --save-dev`  
В packade.json добавляем скрипт чтобы его (сервер) использовать:  

npm run start: dev

Конфиг:  
```

```
Запуск сервера:  
`npx webpack-dev-server`  





[//]: # (# Text // как <h1> ### Text // как <h3>)
[//]: # (Два пробела в конце строки - перенос строки)
[//]: # (1. 2. 3. // авт. создают нумерованный список)
[//]: # (**Text** // <b>)
[//]: # (`Text` // Выделить жетым как одну строку кода)
[//]: # (```Text``` // <code> - блок кода)
[//]: # (https://github.com/sandino/Markdown-Cheatsheet.git)
