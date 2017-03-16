'use strict';

window.onload = function () {
	// Создает экземпляр карты и привязывает его к созданному контейнеру
	const map = new window.YMaps.Map(document.getElementById('YMapsID'));

	// Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
	map.setCenter(new window.YMaps.GeoPoint(59.95, 30.29), 10);
};
