//create different arrays for street number, street name, city name, state name and zip code
//randomly generate an address from the arrays

var streetNumber = [111, 145, 22342, 22, 998, 108, 500, 18, 37, 10375, 2282, 5730, 27, 99, 1099, 678, 987, 910, 4, 8, 10, 2, 1.5, 221];

var streetName = ['Hidden Springs Lane', 'Clear Springs Pkwy', 'Rolling Green Drive',
    'Spring Hill Pkwy', 'Peachtree Street', 'North Avenue', 'MLK Blvd', 'Fourth Street', '10th Junction', '18th Crossing', 'Crescent Park', 'Quince Hill',
    'Pine Trail', 'B Baker Pass'];

var cityName = ['Atlanta', 'Seattle', 'Boston', 'Los Angeles', 'Portland', 'Dallas',
    'Chicago', 'Tallahassee', 'Savannah', 'Austin', 'Sydney', 'London'];

var stateName = ['GA', 'AL', 'CA', 'KS', 'NY', 'OR', 'FL', 'MS',
    'AR', 'MA', 'PA', 'TX', 'AUS', 'UK', 'KY', 'TN', 'SC', 'NC'];

var zipCode = [30269, 30080, 10543, 89910, 67748, 35563, 89532, 33433, 55575, 921867, 77392, 018566, 112345];

var random = streetNumber[Math.floor(Math.random() * streetNumber.length)]
    + " " + streetName[Math.floor(Math.random() * streetName.length)]
    + ", " + cityName[Math.floor(Math.random() * cityName.length)]
    + ", " + stateName[Math.floor(Math.random() * stateName.length)]
    + ", " + zipCode[Math.floor(Math.random() * zipCode.length)];

console.log(random);