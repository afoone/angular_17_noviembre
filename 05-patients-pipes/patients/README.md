# REST

```

/patients -> lista de pacientes
/patients/1 -> paciente 1

GET /patients -> traer los datos de los pacientes
GET /patients/1 -> traer los datos del paciente 1

GET es idempotente

POST /patients -> añadir un elemento a la lista de pacientes

POST NO es idempotente

PUT /patients/1 -> sustituye el paciente por el que le estoy pasando 

PUT ES idempotente

DELETE /patients/1 -> borra el paciente número 1

DELETE ES idempotente

PATCH /patients/1 -> 
  PATCH NO ES IDEMPOTENTE
  PATCH /patients/1 {add: {age: 1}} ---> ESTE ERA EL OBJETIVO DEL PATCH

  PATCH /patients/1 ---> se usa habitualmente cuando se quiere cambiar un atributo del objeto sin sobreescribir los demás 

  {
    name: "Roberto",
    age: 34
  }

  PUT patient/1 {
    age: 45
  }
  
  {
    age: 45
  }

  PATCH patient/1 {
    age: 45
  }

  {
    name: "Roberto",
    age: 45
  }

```


# Reactive forms

- FormControl - encapsula cada input de un form
- Validator : valida las entradas
- Observers: observadores a los cambios en un formulario


Formcontrol : input concreto

