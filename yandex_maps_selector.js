    // Версия API 2.1
    var map,
        init = function () {

        map = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7,
            controls: []
        });

        var searchControl = new ymaps.control.SearchControl({
            provider: 'yandex#publicMap',
            options: {
                noPlacemark: true
            }
        });


        searchControl.events.add('resultselect', function (e) {

            var results = searchControl.getResultsArray(),

                selected = e.get('index'),

                point = results[selected].geometry.getCoordinates();

            map.geoObjects.removeAll();

            var mark = new ymaps.Placemark(point, {}, {draggable: true});

            mark.events.add('dragend', function (e) {

                console.log(mark.geometry.getCoordinates());

            });

            map.geoObjects.add(mark);

        });

        map.controls.add(searchControl);

    };

    ymaps.ready(init);
