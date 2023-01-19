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

    function getCountriesWithMaxCitiesCount(countries) {
        var maxCitiesCount = 0;

        countries.forEach(function (country) {
            if (country.cities.length > maxCitiesCount) {
                maxCitiesCount = country.cities.length;
            }
        });

        return countries.filter(function (country) {
                return country.cities.length === maxCitiesCount;
            });
    }

    console.log("Страны с наибольшим количеством городов:");
    console.log(getCountriesWithMaxCitiesCount(countries));

    function getTotalPopulation(countries) {
        var totalPopulation = {};

        countries.forEach(function (country) {
            totalPopulation[country.name] = country.cities.reduce(function (sum, currentCity) {
                return sum + currentCity.population;
            }, 0);
        });

        return totalPopulation;
    }

    console.log("Суммарная численность по странам:");
    console.log(getTotalPopulation(countries));
})();