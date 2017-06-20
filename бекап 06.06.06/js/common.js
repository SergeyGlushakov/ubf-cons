//input mask
(function () {
  $('.input_phone-mask').inputmask('+7 (999) 999 99 99');
}());

//yandex-map
(function () {
  ymaps.ready(init);
  var myMap,
    myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [55.755814,37.617635],
      zoom: 9,
      controls: []
    });

    myMap.behaviors.disable(['scrollZoom']);
    // myMap.controls.remove('geolocationControl')
    //     .remove('searchControl')
    //     .remove('trafficControl')
    //     .remove('typeSelector')
    //     .remove('fullscreenControl')
    //     .remove('zoomControl')
    //     .remove('rulerControl');

    myPin = new ymaps.GeoObjectCollection({}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/icons/map-marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-15, -55]
    });

    myTargetPlacemark1 = new ymaps.Placemark([55.604676, 37.536705], {});
    myTargetPlacemark2 = new ymaps.Placemark([55.603989, 37.528133], {});
    myTargetPlacemark3 = new ymaps.Placemark([55.604099, 37.539398], {});
    myTargetPlacemark4 = new ymaps.Placemark([55.601183, 37.530150], {});

    myPin.add(myTargetPlacemark1).add(myTargetPlacemark2).add(myTargetPlacemark3).add(myTargetPlacemark4);
    myMap.geoObjects.add(myPin);
  }
}());