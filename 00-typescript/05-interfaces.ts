
interface VozAnimal {
    hablar(): string
}

class Perro implements VozAnimal {
    hablar(): string {
        return "guau guau"
    }

}

class Gato implements VozAnimal {
    hablar(): string {
        return "miau miau"
    }
}

let mascotas: Array<VozAnimal> = []

mascotas.push(new Perro())
mascotas.push(new Gato())

mascotas.forEach(
    m => console.log(m.hablar())
)

interface gps {
    lat: number,
    long: number,
    label?: string,
    go?: Function
}

let p: gps = {
    lat: 67,
    long: 87
}