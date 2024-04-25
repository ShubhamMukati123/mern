const car = {

    brand:'BMW',
    Headlight:2,
    wheels:4,
    enginetype:'petrol'
}

const audi = {
    ...car,brand:'audi',color:'blue',length:14,
}
const range_rover={
    ...car,brand:'range_rover',color:'red',lenght:15,
}
console.log(audi)
console.log(range_rover)