ymaps.ready(init);

let myMap, myPlacemark;

function init() {
    myMap = new ymaps.Map("map", {
        center: [41.311081, 69.240562],
        zoom: 12,
    });

    myPlacemark = new ymaps.Placemark([39.652451, 66.970139], {
        hintContent: "Toshkent!",
        balloonContent: 'O"zbekiston Poytaxti',
    });

    myMap.geoObjects.add(myPlacemark);

    // // Masofalar orasidagi yo'l

    // ymaps.route(["Termiz", "Toshkent"]).then(
    //     function (route) {
    //         myMap.geoObjects.add(route);
    //     },
    //     function (error) {
    //         alert("KUtilmagan muammo: " + error.message);
    //     }
    // );

    // // Klaster
    // let coords = [
    //     [39.652451, 66.970139],
    //     [39.6544, 66.98134],
    //     [39.656425, 66.9611],
    //     [39.655461, 66.95131],
    //     [39.6574157, 66.97116],
    // ];

    // let myGeoObjects = [];
    // for (let i = 0; i < coords.length; i++) {
    //     myGeoObjects[i] = new ymaps.GeoObject({
    //         geometry: {
    //             type: "Point",
    //             coordinates: coords[i],
    //         },
    //     });
    // }

    // let myClusterer = new ymaps.Clusterer();
    // myClusterer.add(myGeoObjects);
    // myMap.geoObjects.add(myClusterer);

    // //Region
    // ymaps.regions
    //     .load("RU", {
    //         lang: "ru",
    //         quality: 1,
    //     })
    //     .then(
    //         function (result) {
    //             let regions = result.geoObjects;
    //             myMap.geoObjects.add(regions);
    //         },
    //         function () {
    //             alert("No response");
    //         }
    //     );
}
