/*
 * CircleBar v1.0
 * https://github.com/FlyInk13/CircleBar
 *
 * Autor: FlyInk13
 * http://FlyInk.ru/
 *
 * Date: 2016-07-25
 */

function CircleBar(el,options){
	//Проверка существования элемента
	if(typeof el !== "object" || el.nodeType !== 1)return console.error("TypeError: Failed to execute 'CircleBar': 1 argument required, but only 0 present.");
	//Проверка настроек
	if(typeof options !== "object")options = {};
	var defaultOptions = {
		size:50,//Размер
		padding:2,//Отступ
		lineSize:2,//Размер
		prefix:"",//текст перед значением 
		postfix:"%",//текст после значения
		badValueMin:75,//значение после которого прогресс-бар красить colorBad
		background:"rgba(255,255,255,.2)",//фон
		styleCricles:"transition: stroke-dashoffset .2s linear,color .2s linear;fill:transparent;",//Стиль полосок
		styleDiv:"display: inline-block;position: relative;border-radius: 100%;text-align: center;",//Стиль элемента
		styleText:"display: inline-block;line-height:0px;padding-top:50%;width:100%;position: absolute;left:0px;",//Стиль текста
		colorText:"#fff",//Цвет текста 
		colorNormal:"#fff",//Нормальный цвет полоски
		colorLine:"transparent",//Цвет остальной части полоски
		id:""//ID элемента
		};
	options.__proto__ = defaultOptions;
	this.options = options;

	this.radius = (options.size)/2;//Радиус круга
	this.div = document.createElement("div");
	el.appendChild(this.div);//Добавляем элемент
		this.div.id = options.id;
		this.div.setAttribute("style",options.styleDiv);//Указываем стиль стиль элемента
		this.div.style.height = this.div.style.width = options.size+"px";
		this.div.style.color = options.colorText;
		this.div.style.background = options.background;
		this.text = document.createElement("span");
		this.div.appendChild(this.text);//Добавляем svg в элемент
			this.text.setAttribute("style",options.styleText);//Указываем стиль текста
		this.xmlns = "http://www.w3.org/2000/svg";
		this.svg = document.createElementNS(this.xmlns,"svg");
		this.div.appendChild(this.svg);//Добавляем svg в элемент
			this.svg.setAttribute("width",options.size);
			this.svg.setAttribute("height",options.size);
			this.svg.setAttribute("viewPort","0 0 100 100");
			this.cricleLine = document.createElementNS(this.xmlns,"circle");
			this.cricleBar = document.createElementNS(this.xmlns,"circle");
			this.svg.appendChild(this.cricleLine);//Добавляем линию в svg 
				this.cricleLine.setAttributeNS(null,"r",this.radius-options.padding-options.lineSize);
				this.cricleLine.setAttributeNS(null,"cx",this.radius);
				this.cricleLine.setAttributeNS(null,"cy",this.radius);
				this.cricleLine.setAttributeNS(null,"stroke",options.colorLine);
				this.cricleLine.style.cssText = this.cricleBar.style.cssText = options.styleCricles;
				this.cricleLine.style.strokeWidth = this.cricleBar.style.strokeWidth = options.lineSize+"px";
			this.svg.appendChild(this.cricleBar);//Добавляем линию в svg
				this.cricleBar.setAttributeNS(null,"r",this.radius-options.padding-options.lineSize);
				this.cricleBar.setAttributeNS(null,"cx",this.radius);
				this.cricleBar.setAttributeNS(null,"cy",this.radius);
				this.cricleBar.lineSize = Math.PI*(options.size-(options.padding+options.lineSize)*2);//Длинна линий
				this.cricleBar.setAttributeNS(null,"stroke-dasharray",this.cricleBar.lineSize);//Размер штриха линий
	this.set = function(val){//Функция установки значения 
		if(typeof val !== "number")return console.error("TypeError: Failed to execute 'set' on 'CircleBar': 1 argument required, but only 0 present.");
		val = val % 100;//Убераем лишнее
		this.cricleBar.setAttribute("stroke-dashoffset",((100-val)/100)*(this.cricleBar.lineSize-options.padding));//Расчитываем и указываем отступ
		if(val >= options.badValueMin && options.colorBad){//Указываем цвет
			this.cricleBar.style.stroke = options.colorBad;
		}else{
			this.cricleBar.style.stroke = options.colorNormal;
		}
		this.text.innerHTML = options.prefix+val+options.postfix;
		return true;
	}
	return this;
}
