// String
let c: string
c = "hola mundo"

// inferencia de tipos
let d = "infiero el tipo a string"
console.log(c, d)

// number
let numero: number = 0

// boolean
let boleano: boolean = true

// cualquier tipo
let cualquiera: any = ["dskljf"]

// Arrays
let arr: Array<string> = []
//let arr: string[]
arr.push("hola")
//arr.push(2)

console.log(arr)

// array de any
let arrAny: any[]

// multiples
let multiple: string | number
multiple = "4"
multiple = 4
// multiple = false
