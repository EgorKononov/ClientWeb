(function () {
    var countries = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 16555000
                },
                {
                    name: "Saint Petersburg",
                    population: 5383000
                },
                {
                    name: "Novosibirsk",
                    population: 1567000
                }
            ],
        },
        {
            name: "Japan",
            cities: [
                {
                    name: "Tokyo",
                    population: 38505000
                },
                {
                    name: "Osaka",
                    population: 17150000
                },
                {
                    name: "Nagoya",
                    population: 10240000
                }
            ],
        },
        {
            name: "India",
            cities: [
                {
                    name: "Delhi",
                    population: 28125000
                },
                {
                    name: "Mumbai",
                    population: 23645000
                }
            ],
        },
    ];

    console.log("Массив стран:");
    console.log(countries);

    var countriesWithMaxCitiesCount = [];
    var maxCitiesCount = 0;

    countries.forEach(function (e) {
        if (e.cities.length > maxCitiesCount) {
            maxCitiesCount = e.cities.length;
        }
    });

    countries.forEach(function (e) {
        if (e.cities.length === maxCitiesCount) {
            countriesWithMaxCitiesCount.push(e);
        }
    });

    console.log("Страны с наибольшим количеством городов:");
    console.log(countriesWithMaxCitiesCount);

    var countriesMap = new Map();

    countries.forEach(function (e) {
        var totalPopulation = 0;

        e.cities.forEach(function (e) {
            totalPopulation += e.population;
        });

        countriesMap.set(e.name, totalPopulation);
    });

    console.log("Суммарная численность по странам:");
    console.log(countriesMap);
})();