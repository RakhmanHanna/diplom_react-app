# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


TO DO list
Адрес API сервера: https://jsonplaceholder.typicode.com
Список users хранится в контексте над всем веб-приложением
В верхней части страницы должна быть навигация по приложению
Проект должен содержать  страницы: Posts, Albums, Todos, Users


Страница Posts (/posts):
Отображать posts на странице в виде карточек (можно использовать компонент Card из Antd) по три в ряд.
Карточка должна содержать в себе title, body, name юзера (можно использовать компонент Avatar из Antd) и кнопку “Show comments”. 
По клику на кнопку “Show comments” открывается модальное окно, где мы можем увидеть вверху сам пост, а ниже списком выводятся комментарии (эндпоинт ‘/comments’) к соответствующему посту (можно использовать компонент Comment из Antd) 

Страница Albums (/albums):
Отображать albums ввиде таблицы (можно использовать компонент Table из Antd) с колонками “User name”, “Album title” и “Action”(в этой колонке у каждого альбома должна быть своя кнопка “Show photos”)
По клику на кнопку “Show photos” мы переходим на страницу текущего альбома (/albums/:albumId) и отображаем фотки плиткой по пять в линию

Страница Todos (/todos):
Отображать todos небольшими карточками по 4 в ряд.
Карточка должна в себе содержать title, name юзера (можно использовать компонент Avatar из Antd) и completed ввиде галочки или крестика
При наведении на name должен появляться попап (компонент Popover из Antd) с информацией о юзере
В попапе отображается информация о юзере: name, email, phone, address (street, suite, city)
Вверху страницы добавить три фильтра и кнопку “Применить фильтры”
Три фильтра: по имени юзера(инпут), по названию тудушки(инпут), по статусу Completed(компонент Select из Antd)
После введенных значений в инпуты, фильтр применяется по клику на кнопку “Применить фильтры”.

Страница Users (/users):
Отображать users списком (компонент List из Antd)
Отображаемая информация для юзера: id, name, email


If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
