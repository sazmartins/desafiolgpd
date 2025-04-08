class Car {
    constructor(model, precO, alturaC, alturaV, alturaS, capacidadeC, motoR, potenciA, volumeC, rodA, img) {
        this.image = img
        this.modelo = model
        this.alturacacamba = alturaC
        this.alturaveiculo = alturaV
        this.alturasolo = alturaS
        this.capacidadecarga = capacidadeC
        this.motor = motoR
        this.potencia = potenciA
        this.volumecacamba = volumeC
        this.roda = rodA
        this.preco = precO

    }
}

let cars = []

function SetCarToCompare(input, car) {


    if (input.checked == false) {

        const carIndex = GetCarArrPosition(car)
        cars.splice(carIndex, 1)


        return
    }

    if (cars.length > 1) {
        input.checked = false
        alert("Não pode selecionar mais de dois carros")

        return
    }

    cars.push(car)

}

function GetCarArrPosition(car) {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].modelo === car.modelo) {
            return i;
        }
    }
    return -1;
}

function UpdateCompareTable() {

    // Adiciona a foto na tabela
    const imgUm = document.getElementById("compare_image_0")
    const imgDois = document.getElementById("compare_image_1")

    imgUm.src = cars[0].image
    imgDois.src = cars[1].image


    UpdateValue("modelo", "modelo")
    UpdateValue("alturacacamba", "alturacacamba")
    UpdateValue("alturaveiculo", "alturaveiculo")
    UpdateValue("alturasolo", "alturasolo")
    UpdateValue("capacidadecarga", "capacidadecarga")
    UpdateValue("motor", "motor")
    UpdateValue("potencia", "potencia")
    UpdateValue("volumecacamba", "volumecacamba")
    UpdateValue("roda", "roda")
    UpdateValue("preco", "preco")

}

function UpdateValue(idName, attribute) {
    for (let i = 0; i < 2; i++) {
        let element = document.getElementById(`compare_${idName}_${i}`)
        element.textContent = cars[i][attribute]
    }
    i = 0
}

function ShowCompare() {

    if (cars.length !== 2) {
        alert("O número de carros tem que ser dois")
        return
    }

    UpdateCompareTable()

    const dialog = document.getElementById("compare")

    dialog.showModal()
}

function HideCompare() {
    const dialog = document.getElementById("compare")
    dialog.close()
}