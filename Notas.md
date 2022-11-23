# Notas

## Deuda ténica

Falta de calidad en algún tipo de proceso en el desarrollo de sofware, que genera una deuda que repercutirá en costos futuros (ej: el tiempo que se necesitará para refactorizar)

## Esquema de la deuda técnica

1. Imprudente y deliverada: Ej: "no hay tiempo, solo copia y pega eso"
2. Imprudente e inadvertida: Surgen por la falta de conocimiento. Ej: "¿Qué son los patrones de diseño?"
3. Prudente y deliverada: "Tenemos que entregar rápido, ya refactorizaremos"
4. Prudente e inadvertida: "Ahora sabemos como lo deberíamos haber hecho"

## Cómo se paga una deuda ténica?

Refactorización. Es mejorar el código sin alterar su funcionamiento, para que sea más entendible y tolerante a cambios.

Para que una refactorización fuerte tenga el objetivo esperado, es imprescindible contar con pruebas automáticas

## Clean Code

1. Nombres pronunciables y expresivos

## STUPID

Code smells: Se relaciona con la deuda tecnica, son posibles indicios que hay cosas mal en el codigo y hay que refactorizar

**S**ingleton: patrón singleton
**T**ight Coupling: alto acoplamiento
**U**nestability: código no probable (unit test)
**P**remature optimization: optimizaciones prematuras
**I**ndescriptive Naming: nombres poco descriptivos
**D**uplication: duplicidad ed codigo, no aplicar principio DRY

### Singleton

La ventaja principal es que nos garantizar que vamos a tener una unica isntanacia de la calse a lo largo de toda la aplicacion

Desventajas:

- Vive en el contexto global
- Puee ser modificado por cuakquiera y en cualquier momento
- No es rastreable
- Dificil de testar debido a su ubicacion

### Alto acoplamiento

Lo ideal es tener bajo acomplamiento y buena cohesion

"Queremos diseñar componentes que sean autocontenidos,auto suficientes e independientes. Con un objetico y un proposito bien defnido"

### Desventajas de alto acomplamiento

- Un cambio en un modulo por lo general provoca un efecto dominó de los camvios en otros modulos
- El ensamblaje de modulos puede requerir mas esfuerzo y/o tiemop debido a mayor dependencia entrre modulos
- Un modulo en particular puede ser mas dificl de reutilizar y/o probar porque se deben incluir modulos dependientes

### Cohesion

- La cohesion se refiere a lo que la calse o modulo puede hacer
- La baja cohesion significa que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer
- Alta cohesion significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase

### Acomplamiento

- Se refiere a cuan relacionadas o dependientes son dos clases o modulos entre sí
- El bajo acomplamiento significa que cambiar algo importante en una clase no debería afectar a la otra
- El alto acoplamiento dificultarpia el cambioy el mantemintiso de su codigo, dado que las clases están muy unidad, hacer un cambio podría requerer una renovacion completa del sistema

## Codigo no probable

- Esta hecho de forma que no se puede probar
- Dependencias del contexto
- Codigo de alto acoplamiento

## Optimizaciones prematuras

- Mantener abierta las opcioens retradasno la toma de decisines
- No desarrollar bastracciones innncesarias, no atinciparnos a los requisitos

## Nombres poco descriptivos

- Nombre de variable smal nombradas
- Nombres de clase genéricas
- Nombre de funciones mal nombradas
- Seo muy especifco o demasiado generico

## Duplicidad de código (no aplicar dry)

### Duplicidad real

- Código es identido y cumple la misma funcin
- Un ca,mbio implica actualizar el códig identico en varios lugares
- Incrementa posibilidaddes de error humano al ovidar una parte para actualizar
- Mayor cantidad de pruebas inncesarias

### Duplicidad accidental

- El código luce similar, pero cumple tarea distintas
- Cuando hay un cambio, solo hay que modificar un solo lugar
- Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones

## Otros code smells (refactoring.guru)

- Inflación: cuando una funcion tiene más de 20 lineas, revisar si puede separarse o cuando una clase tiene muchas funciones, se puede separar en varias subclases
- Obsesión primitiva
- Lista larga de parámetros

## Acopladores

### Feature Envy

- un metodo accede a los datos de otra clase más que a los de el mismo

### Intimidad inapropiada

- Una clase usa campos o metodos internos de otra

### Cadena de mensajes

- Tenemos una funcion A que llamma B, B llama C, C llama D, ...
- Esto implicada que el cliente depende de la navegación entre clases (mover un archivo de lugar)

### The middle man

- Una clase solo hace un trabajo y es delegar el trabajo a otra clase (para que sirve esta clase ??)

## SOLID

Los principios SOLID nos indican cómo organizar nuestras funcines y estructuras de datos en componentes y cómo dichos componentes debe estar interconectados

- **S**: Single Responsability Principle (SRP)
- **O**: Open/Closed Principle (OCP)
- **L**: Liskov Subtitution Principle (LSP)
- **I**: Interface Segregation Priciple (ISP)
- **D**: Dependency Inversion Principle (DIP)

### SRP

"Nunca debería haber más de un motivo por el cuál cambiar una clase o módulo"

**Nota**: "tener una única responsabilidad" !== "hacer una única cosa"

Para detectar violaciones a este principio:

- Nombre de clases y/o modulos demasiados genéricos
- Cambios en el código suelen afectar la clase o módulo
- La clase involucra múltiples capas
- Número elevado de importaciones
- Excesivo número de líneas de código

## OCP

Establece que las entidades de sofware deben estar abiertas para la extensión, pero cerradas para la modificación

Para detectar violaciones de este principio:

- Cambios normalmente afectan nuestra clase o modulo
- Cuando una clase o modulo afecta muchas capas

## LSP

"Las funciones que utilicen punteron o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo"

"Siendo U un subtipo de T, cualquier instaancia de T debería poder ser sustituida por cualaquier instancia de U sin alterar las propiedades del sistema"

## ISP

"Los clientes no deberían estar obligado a depender de interfaces que no utilicen"

Para detectar violaciones de este principio:

- Si las interfaces que diseñamos nos obligas a violar los principipos de responsabilidad unica y substituon de Liskov

## DIP

"Los módulos de alto nivel no deben depender de un modulos de bajo nivel. AAmbos deben depender de abstreacciones. Las abstracciones do deben depender de concreciones. Los detalles deben depender de abstracciones"

Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio

Los menos importantes son los que están próximos a la infrastrcutura, es decir, aquellos relacionado con la UI, la persistencia, la comunicación con API externas

Cuando nuestro programa llegue a estar formado por muchos modulos. Cuando esto pase debemos usar inyeccion de dependencias
