# CircleBar
Генератор круглых прогресс баров с различными настройками на чистом JS с использованием SVG 

Demo: [http://flyink.ru/demo/CircleBar/](http://flyink.ru/demo/CircleBar/)

```javascript
  //Пример использования
  var cb1 = new CircleBar(
      document.body,//Куда вставлять
      {//Настройки
          size:75,//Диаметр (px)
          lineSize:5, //Ширина линии круга (px)
          padding:0, //Отступ (px)
          background:"#D32F2F", //Фон (css)
          colorLine:"#B71C1C" //Фон (css)
      });

  var i = 0;
  setInterval(function(){
      if(i>100)i = 0;
      cb1.set(i++);//Установить значение
  },200);
```
