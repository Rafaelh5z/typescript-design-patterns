# Typescript Design Patterns
Creational, Structural and Behavior patterns with typescript

## Patrones Creacionales

Estos patrones se centran en los mecanismos de creación de objetos. Su objetivo es crear objetos de una manera que se adapte a la situación, proporcionando una mayor flexibilidad y reutilización del código. En lugar de instanciar objetos directamente con el operador `new`, los patrones creacionales delegan la responsabilidad de la creación de objetos a clases especiales. Esto ayuda a reducir la complejidad y a desacoplar el código cliente de las clases concretas que necesita instanciar.

Algunos de los patrones creacionales más comunes son:
- **Factory Method:** Permite que una interfaz cree objetos en una superclase, pero deja que las subclases alteren el tipo de objetos que se crearán.
- **Abstract Factory:** Permite producir familias de objetos relacionados sin especificar sus clases concretas.
- **Builder:** Permite construir objetos complejos paso a paso.
- **Singleton:** Asegura que una clase solo tenga una única instancia y proporciona un punto de acceso global a ella.
- **Prototype:** Permite copiar objetos existentes sin que el código dependa de sus clases.

## Patrones Estructurales

Estos patrones se ocupan de la composición de clases y objetos para formar estructuras más grandes y complejas. Facilitan el diseño al identificar una forma sencilla de realizar relaciones entre entidades, asegurando que si una parte del sistema cambia, el sistema entero no necesite hacerlo.

Algunos de los patrones estructurales más comunes son:
- **Adapter:** Permite la colaboración entre objetos con interfaces incompatibles.
- **Bridge:** Permite dividir una clase grande o un conjunto de clases estrechamente relacionadas en dos jerarquías separadas (abstracción e implementación) que pueden desarrollarse independientemente la una de la otra.
- **Composite:** Permite componer objetos en estructuras de árbol y luego trabajar con estas estructuras como si fueran objetos individuales.
- **Decorator:** Permite añadir nuevas funcionalidades a un objeto colocando estos objetos dentro de "envoltorios" especiales que contienen las funcionalidades.
- **Facade:** Proporciona una interfaz simplificada a una biblioteca, un framework o cualquier otro conjunto complejo de clases.
- **Flyweight:** Permite que un gran número de objetos quepan en la memoria RAM disponible compartiendo partes comunes de estado entre múltiples objetos en lugar de mantener todos los datos en cada objeto.
- **Proxy:** Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él.

## Patrones de Comportamiento

Estos patrones se centran en los algoritmos y la asignación de responsabilidades entre los objetos. No solo describen patrones de objetos o clases, sino también patrones de comunicación entre ellos.

Algunos de los patrones de comportamiento más comunes son:
- **Chain of Responsibility:** Permite pasar solicitudes a lo largo de una cadena de manejadores. Al recibir una solicitud, cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena.
- **Command:** Convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud.
- **Iterator:** Permite recorrer elementos de una colección sin exponer su representación subyacente (lista, pila, árbol, etc.).
- **Mediator:** Reduce las dependencias caóticas entre objetos. El patrón restringe las comunicaciones directas entre los objetos y los obliga a colaborar únicamente a través de un objeto mediador.
- **Memento:** Permite guardar y restaurar el estado anterior de un objeto sin revelar los detalles de su implementación.
- **Observer:** Permite definir un mecanismo de suscripción para notificar a múltiples objetos sobre cualquier evento que le suceda al objeto que están observando.
- **State:** Permite que un objeto altere su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase.
- **Strategy:** Permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer que sus objetos sean intercambiables.
- **Template Method:** Define el esqueleto de un algoritmo en la superclase pero deja que las subclases sobrescriban pasos específicos del algoritmo sin cambiar su estructura.
- **Visitor:** Permite separar algoritmos de los objetos sobre los que operan.

---

## Patrón de Diseño Builder (Constructor)

El patrón **Builder** es un patrón de diseño creacional que te permite construir objetos complejos paso a paso. El patrón te permite producir distintos tipos y representaciones de un objeto utilizando el mismo código de construcción.

### Problema que resuelve

Imagina un objeto complejo que requiere una inicialización laboriosa con muchos campos y objetos de configuración anidados. Dicho código de inicialización suele estar sepultado dentro de un constructor monstruoso con una gran cantidad de parámetros. O, peor aún, esparcido por todo el código cliente.

Por ejemplo, pensemos en cómo crear un objeto `Casa`. Para construir una casa sencilla, necesitas cuatro paredes y un suelo, pero para una casa más grande, además quieres un tejado, un jardín, una piscina, etc. En este caso, tendrías un constructor con muchos parámetros, la mayoría de los cuales no se utilizarán en la mayoría de los casos.

### ¿Cómo funciona?

El patrón Builder sugiere que extraigas el código de construcción del objeto de su propia clase y lo muevas a objetos separados llamados *builders*.

El patrón organiza la construcción de objetos en una serie de pasos ( `buildParedes()`, `buildPuertas()`, etc.). Para crear un objeto, ejecutas una serie de estos pasos en un objeto builder. La parte importante es que no necesitas llamar a todos los pasos. Solo puedes llamar a los pasos que son necesarios para producir una configuración particular de un objeto.

Cuando el objeto está construido, solicitas el resultado al builder.

### Estructura

1.  La interfaz **Builder** declara los pasos de construcción del producto que son comunes a todos los tipos de builders.
2.  Los **Builders Concretos** proporcionan diferentes implementaciones de los pasos de construcción. Los builders concretos pueden producir productos que no siguen la interfaz común.
3.  Los **Productos** son los objetos resultantes. Los productos construidos por diferentes builders no tienen por qué pertenecer a la misma jerarquía de clases o interfaz.
4.  El **Director** define el orden en el que se deben ejecutar los pasos de construcción para poder crear y reutilizar configuraciones específicas de productos.
5.  El **Cliente** asocia uno de los objetos builder con el director.

![Estructura del Patrón Builder](assets/documentation/builder-structure.png)

### ¿Cuándo utilizarlo?

*   **Usa el patrón Builder para evitar un "constructor telescópico"**. Si tienes un constructor con muchos parámetros opcionales, el patrón Builder puede ser una buena solución.
*   **Usa el patrón Builder cuando quieras que tu código pueda crear diferentes representaciones de un mismo objeto**.
*   **Usa el patrón Builder para construir árboles Composite u otros objetos complejos**.

### Pros y Contras

#### Pros

*   Puedes construir objetos paso a paso, aplazar los pasos de construcción o ejecutar los pasos de forma recursiva.
*   Puedes reutilizar el mismo código de construcción al construir varias representaciones de productos.
*   Aísla el código de construcción complejo de la lógica de negocio del producto.

#### Contras

*   La complejidad general del código aumenta, ya que el patrón requiere la creación de múltiples clases nuevas.
