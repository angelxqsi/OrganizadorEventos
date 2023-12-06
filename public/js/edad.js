// Obtenemos el elemento select de la edad
const selectEdad = document.getElementById('inputEdad');

// Generamos opciones para edades del 1 al 100
for (let i = 1; i <= 1000; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectEdad.appendChild(option);
}


const ciudadesMexico = [
    'Acapulco',
    'Aguascalientes',
    'Apodaca',
    'Atizapán de Zaragoza',
    'Cabo San Lucas',
    'Cancún',
    'Celaya',
    'Chalco',
    'Chihuahua',
    'Chimalhuacán',
    'Ciudad Acuña',
    'Ciudad Benito Juárez',
    'Ciudad del Carmen',
    'Ciudad Juárez',
    'Ciudad López Mateos',
    'Ciudad Madero',
    'Ciudad Obregón',
    'Ciudad Santa Catarina',
    'Ciudad Valles',
    'Ciudad Victoria',
    'Coatzacoalcos',
    'Colima',
    'Córdoba',
    'Cuautitlán Izcalli',
    'Cuautla',
    'Cuernavaca',
    'Culiacán',
    'Durango',
    'Ecatepec de Morelos',
    'Ensenada',
    'Fresnillo',
    'General Escobedo',
    'Gómez Palacio',
    'Guadalajara',
    'Guadalupe',
    'Hermosillo',
    'Iguala',
    'Irapuato',
    'Jiutepec',
    'La Paz',
    'León',
    'Los Mochis',
    'Manzanillo',
    'Matamoros',
    'Mazatlán',
    'Mérida',
    'Mexicali',
    'Minatitlán',
    'Miramar',
    'Monclova',
    'Monterrey',
    'Morelia',
    'Naucalpan de Juárez',
    'Navojoa',
    'Nezahualcóyotl',
    'Nogales',
    'Nuevo Laredo',
    'Oaxaca',
    'Orizaba',
    'Pachuca',
    'Piedras Negras',
    'Playa Del Carmen',
    'Poza Rica de Hidalgo',
    'Puebla',
    'Puerto Vallarta',
    'Querétaro',
    'Reynosa',
    'Salamanca',
    'Saltillo',
    'San Francisco Coacalco',
    'San Juan del Río',
    'San Luis Potosí',
    'San Luis Río Colorado',
    'San Nicolás de los Garza',
    'San Pablo de las Salinas',
    'San Pedro Garza García',
    'Santa Catarina',
    'Soledad de Graciano Sánchez',
    'Tampico',
    'Tapachula',
    'Tehuacán',
    'Tepexpan',
    'Tepic',
    'Texcoco',
    'Tijuana',
    'Tlalnepantla de Baz',
    'Tlaquepaque',
    'Tlaxcala',
    'Toluca',
    'Tonala',
    'Torreón',
    'Tulum',
    'Tuxtla Gutiérrez',
    'Uruapan',
    'Valle de Santiago',
    'Veracruz',
    'Villahermosa',
    'Xalapa',
    'Zacatecas',
    'Zamora',
    'Zapopan',
    'Zihuatanejo',
];

// Obtenemos el elemento select de la ciudad
const selectCiudad = document.getElementById('inputCiudad');

// Generamos opciones para ciudades de México
ciudadesMexico.forEach(ciudad => {
    const option = document.createElement('option');
    option.value = ciudad;
    option.textContent = ciudad;
    selectCiudad.appendChild(option);
});