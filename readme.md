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



Если в пакет `package.json` в объект `scripts` добавить строку `"build" : "webpack"`, то запускать сборку можно командой `npm run build`  

Восстановить модули по данным package.json могут команды:  
`npm install`  
или  
`yarn install`  
Установка yarn:  
https://yarnpkg.com/getting-started/install  

## Для работы DevServer необходимо собирать html файл в папке dist
Ставим шаблонизатор:  
`npm i html-webpack-plugin --save-dev`  
Добавляем в конфиг константу:  
`const HtmlWebpackPlugin = require('html-webpack-plugin');` 
В конфиг в plugins:  
```
new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        }),
```  

Ставим сам шаблонизатор pug:
`npm i pug pug-loader --save-dev`
В конфиге в rules: создаем новое правило использования файлов .pug:
```
{
    test: /\.pug$/,
    loader: 'pug-loader',
    options: {pretty: true}
}
```






## Установка DevServer
`npm install webpack-dev-server --save-dev`  
В packade.json добавляем скрипт для запуска с собственной конфигурацией (npm run start:dev):  
`"start:dev": "webpack serve --config config/webpack.dev.js"`

Конфиг:  
```

```
Восстановить модули: `npm install`  
Запустить сборку: `npx webpack`  
Запустить непрерывную сборку: `npx webpack --watch`   
Запуск сервера с конфигом из корня: `npx webpack-dev-server`  
Запуск сервера командой из packade.json: `npm run start:dev`  


[//]: # (# Text // как <h1> ### Text // как <h3>)
[//]: # (Два пробела в конце строки - перенос строки)
[//]: # (1. 2. 3. // авт. создают нумерованный список)
[//]: # (**Text** // <b>)
[//]: # (`Text` // Выделить жетым как одну строку кода)
[//]: # (```Text``` // <code> - блок кода)
[//]: # (https://github.com/sandino/Markdown-Cheatsheet.git)
