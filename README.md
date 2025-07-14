# TypeScript Design Patterns

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Patterns](https://img.shields.io/badge/Patterns-16-orange.svg)](#índice)
[![Documentation](https://img.shields.io/badge/Documentation-Complete-brightgreen.svg)](#índice)

Una guía completa de patrones de diseño implementados en TypeScript. Este repositorio contiene ejemplos prácticos de patrones creacionales, estructurales y de comportamiento con explicaciones detalladas y diagramas ilustrativos.

## 🚀 ¿Qué son los Patrones de Diseño?

Los patrones de diseño son soluciones reutilizables a problemas comunes en el diseño de software. Son plantillas que describen cómo resolver un problema que se puede usar en muchas situaciones diferentes. No son código específico, sino conceptos que pueden implementarse de diferentes maneras según el lenguaje de programación.

### Beneficios de usar Patrones de Diseño:
- ✅ **Reutilización de código**: Soluciones probadas y documentadas
- ✅ **Comunicación mejorada**: Vocabulario común entre desarrolladores  
- ✅ **Mejores prácticas**: Código más mantenible y escalable
- ✅ **Resolución de problemas**: Enfoques estructurados para desafíos comunes

## 📋 Índice

### Patrones Creacionales
*   [Builder](#patrón-de-diseño-builder-constructor)
*   [Factory Method](#patrón-de-diseño-factory-method-método-fábrica)
*   [Abstract Factory](#patrón-de-diseño-abstract-factory-fábrica-abstracta)
*   [Prototype](#patrón-de-diseño-prototype-prototipo)
*   [Singleton](#patrón-de-diseño-singleton)

### Patrones Estructurales
*   [Adapter](#patrón-de-diseño-adapter-adaptador)
*   [Composite](#patrón-de-diseño-composite-compuesto)
*   [Decorator](#patrón-de-diseño-decorator-decorador)
*   [Facade](#patrón-de-diseño-facade-fachada)

### Patrones de Comportamiento
*   [Iterator](#patrón-de-diseño-iterator-iterador)
*   [State](#patrón-de-diseño-state-estado)
*   [Template Method](#patrón-de-diseño-template-method-método-plantilla)
*   [Command](#patrón-de-diseño-command-comando)
*   [Mediator](#patrón-de-diseño-mediator-mediador)
*   [Observer](#patrón-de-diseño-observer-observador)
*   [Strategy](#patrón-de-diseño-strategy-estrategia)

---

## 🛠️ Instalación y Configuración

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [TypeScript](https://www.typescriptlang.org/) (versión 4.0 o superior)
- Un editor de código (recomendado: VS Code)

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Rafaelh5z/typescript-design-patterns.git

# Navegar al directorio
cd typescript-design-patterns

# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar ejemplos
npm run start
```

## 🎯 Cómo usar este repositorio

Cada patrón incluye:
- 📖 **Documentación teórica**: Explicación del problema, solución y estructura
- 💻 **Implementación práctica**: Código TypeScript comentado
- 🖼️ **Diagramas UML**: Representación visual del patrón
- ✨ **Ejemplos de uso**: Casos prácticos de aplicación

### Estructura del proyecto
```
src/
├── creationalPatterns/     # Patrones Creacionales
├── structuralPatterns/     # Patrones Estructurales
└── behavioralPatterns/     # Patrones de Comportamiento (próximamente)
```

## 📊 Comparativa de Tipos de Patrones

| Tipo | Propósito Principal | Enfoque | Cuándo Usar | Ejemplos |
|------|-------------------|---------|-------------|----------|
| **Creacionales** | Creación de objetos | Desacoplar la instanciación | Cuando la creación es compleja | Factory, Builder, Singleton |
| **Estructurales** | Composición de objetos | Organizar relaciones | Cuando necesitas estructuras flexibles | Adapter, Decorator, Facade |
| **Comportamiento** | Comunicación entre objetos | Algoritmos y responsabilidades | Cuando el comportamiento varía | Observer, Strategy, Command |

---

## Patrones Creacionales

Estos patrones se centran en los mecanismos de creación de objetos. Su objetivo es crear objetos de una manera que se adapte a la situación, proporcionando una mayor flexibilidad y reutilización del código. En lugar de instanciar objetos directamente con el operador `new`, los patrones creacionales delegan la responsabilidad de la creación de objetos a clases especiales. Esto ayuda a reducir la complejidad y a desacoplar el código cliente de las clases concretas que necesita instanciar.

Algunos de los patrones creacionales más comunes son:
- **Factory Method:** Permite que una interfaz cree objetos en una superclase, pero deja que las subclases alteren el tipo de objetos que se crearán.
- **Abstract Factory:** Permite producir familias de objetos relacionados sin especificar sus clases concretas.
- **Builder:** Permite construir objetos complejos paso a paso.
- **Singleton:** Asegura que una clase solo tenga una única instancia y proporciona un punto de acceso global a ella.
- **Prototype:** Permite copiar objetos existentes sin que el código dependa de sus clases.

## Patrones Estructurales

Estos patrones explican cómo ensamblar objetos y clases en estructuras más grandes, manteniendo la flexibilidad y eficiencia de la estructura. Se centran en cómo las clases y los objetos se componen para formar estructuras más grandes y complejas, utilizando la herencia y la composición para construir estas estructuras y proporcionar nuevas funcionalidades.

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

### Diferencias Clave: Creacionales, Estructurales y de Comportamiento

Para resumir, aquí tienes una comparación directa de los tres tipos de patrones de diseño:

-   **Patrones Creacionales:**
    -   **Propósito:** Se centran en la **creación de objetos**.
    -   **Enfoque:** Proporcionan mecanismos de instanciación flexibles que desacoplan el código cliente de las clases concretas.
    -   **Ejemplo:** En lugar de `new Objeto()`, usas una fábrica o un constructor para obtener un objeto.

-   **Patrones Estructurales:**
    -   **Propósito:** Se centran en la **composición de objetos y clases**.
    -   **Enfoque:** Organizan diferentes clases y objetos para formar estructuras más grandes y proporcionar nuevas funcionalidades.
    -   **Ejemplo:** Unir dos interfaces incompatibles con un Adaptador o construir una estructura de árbol con Composite.

-   **Patrones de Comportamiento:**
    -   **Propósito:** Se centran en la **comunicación entre objetos**.
    -   **Enfoque:** Definen cómo los objetos colaboran y se asignan responsabilidades para realizar una tarea.
    -   **Ejemplo:** Permitir que un objeto notifique a otros sobre cambios (Observer) o encapsular una acción en un objeto (Command).

En esencia:
-   **Creacionales** -> Cómo se **crean** los objetos.
-   **Estructurales** -> Cómo se **estructuran** los objetos.
-   **De Comportamiento** -> Cómo **interactúan** los objetos.

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

---

## Patrón de Diseño Factory Method (Método de Fábrica)

El patrón **Factory Method** es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.

### Problema que resuelve

Imagina que estás creando una aplicación de logística. La primera versión de tu aplicación solo gestiona el transporte en camiones, por lo que la mayor parte de tu código se encuentra dentro de la clase `Camion`.

Después de un tiempo, tu aplicación se vuelve bastante popular. Cada día recibes decenas de solicitudes de empresas de transporte marítimo para que incorpores la logística marítima en la aplicación.

Agregar una nueva clase `Barco` al programa no es tan simple si el resto del código ya está acoplado a la clase `Camion`. Tendrás que hacer cambios en toda la base de código. Si luego decides agregar otro tipo de transporte, como `Avion`, probablemente necesitarás hacer todos estos cambios de nuevo.

### ¿Cómo funciona?

El patrón Factory Method sugiere que reemplaces las llamadas directas de construcción de objetos (usando el operador `new`) con llamadas a un método de fábrica especial. Los objetos devueltos por un método de fábrica a menudo se denominan "productos".

La superclase puede contener una implementación predeterminada del método de fábrica. Las subclases pueden anular este método para cambiar el tipo de producto que se está creando.

### Estructura

1.  La interfaz **Producto** declara la interfaz para los objetos que el método de fábrica crea.
2.  Los **Productos Concretos** son diferentes implementaciones de la interfaz del producto.
3.  La clase **Creador** declara el método de fábrica que devuelve nuevos objetos de producto. Es importante que el tipo de retorno de este método coincida con la interfaz del producto.
4.  Los **Creadores Concretos** anulan el método de fábrica base para que devuelva un tipo diferente de producto.

![Estructura del Patrón Factory Method](assets/documentation/factory-method.png)

### ¿Cuándo utilizarlo?

*   **Usa el Factory Method cuando no sepas de antemano los tipos y dependencias exactos de los objetos con los que tu código debe funcionar.**
*   **Usa el Factory Method cuando quieras proporcionar a los usuarios de tu biblioteca o framework una forma de extender sus componentes internos.**
*   **Usa el Factory Method cuando quieras ahorrar recursos del sistema reutilizando objetos existentes en lugar de reconstruirlos cada vez.**

### Pros y Contras

#### Pros

*   Evitas un acoplamiento estrecho entre el creador y los productos concretos.
*   *Principio de Responsabilidad Única*. Puedes mover el código de creación del producto a un solo lugar, lo que hace que el código sea más fácil de mantener.
*   *Principio de Abierto/Cerrado*. Puedes introducir nuevos tipos de productos en el programa sin romper el código cliente existente.

#### Contras

*   El código puede volverse más complicado ya que necesitas introducir una gran cantidad de nuevas subclases para implementar el patrón. El mejor de los casos es cuando estás introduciendo el patrón en una jerarquía existente de clases creadoras.

---

## Patrón de Diseño Abstract Factory (Fábrica Abstracta)

**Abstract Factory** es un patrón de diseño creacional que te permite producir familias de objetos relacionados sin especificar sus clases concretas.

### Problema que resuelve

Imagina que estás creando un simulador de muebles. Tu código contiene clases que representan:
1.  Una familia de productos relacionados, digamos: `Silla` + `Sofa` + `Mesa`.
2.  Varias variantes de esta familia. Por ejemplo, productos `Silla`, `Sofa` y `Mesa` están disponibles en estos estilos: `Moderno`, `Victoriano`, `ArtDeco`.

Necesitas una forma de crear objetos de mobiliario individuales para que coincidan con otros objetos de la misma familia. Los clientes se molestan bastante cuando reciben muebles que no combinan.

Además, no quieres cambiar el código existente al agregar nuevos productos o familias de productos al programa. Los proveedores de muebles actualizan sus catálogos muy a menudo, y no querrías cambiar el código central cada vez.

### ¿Cómo funciona?

El patrón Abstract Factory sugiere que crees interfaces separadas para cada producto distinto de la familia de productos (por ejemplo, `Silla`, `Sofa` o `Mesa`). Luego puedes hacer que todas las variantes de los productos sigan esas interfaces.

A continuación, declaras la *Fábrica Abstracta* - una interfaz con una lista de métodos de creación para todos los productos que forman parte de la familia de productos (por ejemplo, `crearSilla`, `crearSofa`, `crearMesa`). Estos métodos deben devolver productos abstractos representados por las interfaces que extrajimos anteriormente: `Silla`, `Sofa`, `Mesa`.

Ahora, ¿qué pasa con las variantes de los productos? Para cada variante de una familia de productos, creamos una clase de fábrica separada que implementa la interfaz `FabricaAbstracta`. Una fábrica es una clase que devuelve productos de un tipo particular. Por ejemplo, la `FabricaMueblesModernos` solo puede crear objetos `SillaModerna`, `SofaModerno` y `MesaModerna`.

El código cliente tiene que trabajar con fábricas y productos a través de sus respectivas interfaces abstractas. Esto te permite cambiar el tipo de fábrica que pasas al código cliente, así como el tipo de producto que el código cliente recibe, sin romper el propio código cliente.

### Estructura

1.  Las **Interfaces de Producto Abstracto** declaran interfaces para un conjunto de productos distintos pero relacionados que forman una familia de productos.
2.  Los **Productos Concretos** son varias implementaciones de productos abstractos, agrupados por variantes. Cada producto abstracto (`Silla`/`Sofa`) debe ser implementado en todas las variantes dadas (`Victoriano`/`Moderno`).
3.  La interfaz de la **Fábrica Abstracta** declara un conjunto de métodos para crear cada uno de los productos abstractos.
4.  Las **Fábricas Concretas** implementan los métodos de creación de la fábrica abstracta. Cada fábrica concreta corresponde a una variante específica de productos y crea solo esas variantes de productos.
5.  Aunque las fábricas concretas instancian productos concretos, las firmas de sus métodos de creación deben devolver los correspondientes productos abstractos. De esta manera, el código cliente que utiliza una fábrica no se acopla a la variante específica del producto que obtiene de una fábrica. El **Cliente** puede trabajar con cualquier variante de fábrica/producto concreto, siempre y cuando se comunique con sus objetos a través de interfaces abstractas.

![Estructura del Patrón Abstract Factory](assets/documentation/abstract-factory-pattern.png)

### ¿Cuándo utilizarlo?

*   **Usa el patrón Abstract Factory cuando tu código necesite trabajar con varias familias de productos relacionados, pero no quieras que dependa de las clases concretas de esos productos.**
*   **Considera aplicar el patrón Abstract Factory cuando tengas una clase con un conjunto de Factory Methods que desdibujan su responsabilidad principal.**

### Pros y Contras

#### Pros

*   Puedes estar seguro de que los productos que obtienes de una fábrica son compatibles entre sí.
*   Evitas el acoplamiento estrecho entre productos concretos y el código cliente.
*   *Principio de Responsabilidad Única*. Puedes extraer el código de creación del producto a un solo lugar, lo que facilita el mantenimiento del código.
*   *Principio de Abierto/Cerrado*. Puedes introducir nuevas variantes de productos sin romper el código cliente existente.

#### Contras

*   El código puede volverse más complicado de lo que debería, ya que se introducen muchas interfaces y clases nuevas junto con el patrón.

---

## Patrón de Diseño Prototype (Prototipo)

**Prototype** es un patrón de diseño creacional que te permite copiar objetos existentes sin que tu código dependa de sus clases.

### Problema que resuelve

Digamos que tienes un objeto y quieres crear una copia exacta de él. ¿Cómo lo harías? Primero, tendrías que crear un nuevo objeto de la misma clase. Luego, tendrías que recorrer todos los campos del objeto original y copiar sus valores en el nuevo objeto.

¡Bonito! Pero hay una trampa. No todos los objetos se pueden copiar de esa manera, porque algunos de los campos del objeto pueden ser privados y no ser visibles desde fuera del propio objeto.

Hay otro problema con el enfoque directo. Como debes conocer la clase del objeto para crear un duplicado, tu código se vuelve dependiente de esa clase. Si la dependencia es aceptable, no hay problema. Sin embargo, en muchos casos, solo tienes una referencia a un objeto a través de una interfaz, y no conoces su clase concreta.

### ¿Cómo funciona?

El patrón Prototype delega el proceso de clonación a los propios objetos que se están clonando. El patrón declara una interfaz común para todos los objetos que admiten la clonación. Esta interfaz te permite clonar un objeto sin acoplar tu código a la clase de ese objeto. Por lo general, dicha interfaz contiene un único método `clonar`.

La implementación del método `clonar` es muy similar en todas las clases. El método crea un objeto de la clase actual y transfiere los valores de todos los campos del objeto antiguo al nuevo. Incluso puedes copiar campos privados, porque la mayoría de los lenguajes de programación permiten que los objetos accedan a los campos privados de otros objetos que pertenecen a la misma clase.

Un objeto que admite la clonación se llama *prototipo*. Cuando tus objetos tienen docenas de campos y cientos de configuraciones posibles, clonarlos puede servir como una alternativa a la creación de subclases.

### Estructura

1.  La interfaz **Prototipo** declara los métodos de clonación. En la mayoría de los casos, es un único método `clonar`.
2.  La clase **Prototipo Concreto** implementa el método de clonación. Además de copiar los datos del objeto original al clon, este método también puede manejar algunos casos extremos del proceso de clonación, como clonar objetos vinculados, desenredar dependencias recursivas, etc.
3.  El **Cliente** puede producir una copia de cualquier objeto que siga la interfaz del prototipo.

![Estructura del Patrón Prototype](assets/documentation/prototype.png)

### ¿Cuándo utilizarlo?

*   **Usa el patrón Prototype cuando tu código no deba depender de las clases concretas de los objetos que necesitas copiar.**
*   **Usa el patrón cuando quieras reducir el número de subclases que solo se diferencian en la forma en que inicializan sus respectivos objetos.**

### Pros y Contras

#### Pros

*   Puedes clonar objetos sin acoplarte a sus clases concretas.
*   Puedes deshacerte del código de inicialización repetido en favor de la clonación de prototipos pre-construidos.
*   Puedes producir objetos complejos de forma más conveniente.
*   Obtienes una alternativa a la herencia cuando se trata de preajustes de configuración para objetos complejos.

#### Contras

*   Clonar objetos complejos que tienen referencias circulares puede ser muy complicado.

---

## Patrón de Diseño Singleton (Instancia Única)

**Singleton** es un patrón de diseño creacional que te permite asegurarte de que una clase tenga una sola instancia, a la vez que proporciona un punto de acceso global a esta instancia.

### Problema que resuelve

El patrón Singleton resuelve dos problemas a la vez, violando el *Principio de Responsabilidad Única*:

1.  **Asegurar que una clase tenga una sola instancia**. ¿Por qué querría alguien controlar cuántas instancias tiene una clase? La razón más común para esto es controlar el acceso a algún recurso compartido, por ejemplo, una base de datos o un archivo.

    Funciona así: imagina que creaste un objeto, pero después de un tiempo, decides crear uno nuevo. En lugar de recibir un objeto nuevo, obtendrás el que ya creaste.

    Ten en cuenta que este comportamiento es imposible de implementar con un constructor normal, ya que una llamada al constructor siempre debe devolver un nuevo objeto por diseño.

2.  **Proporcionar un punto de acceso global a esa instancia**. ¿Recuerdas esas variables globales que usabas para almacenar algunos objetos esenciales? Si bien son muy útiles, también son muy inseguras, ya que cualquier código puede sobrescribir el contenido de esas variables y bloquear la aplicación.

    Al igual que una variable global, el patrón Singleton te permite acceder a algún objeto desde cualquier parte del programa. Sin embargo, también protege esa instancia de ser sobrescrita por otro código.

### ¿Cómo funciona?

Todos las implementaciones del Singleton tienen estos dos pasos en común:

*   Hacer que el constructor predeterminado sea privado, para evitar que otros objetos usen el operador `new` con la clase Singleton.
*   Crear un método de creación estático que actúe como constructor. Este método llama al constructor privado para crear un objeto y lo guarda en un campo estático. Todas las siguientes llamadas a este método devuelven el objeto en caché.

Si tu código tiene acceso a la clase Singleton, entonces puede llamar al método estático de la Singleton. Entonces, cada vez que se llame a ese método, siempre se devolverá el mismo objeto.

### Estructura

![Estructura del Patrón Singleton](assets/documentation/singleton.png)

La clase **Singleton** declara el método estático `getInstance` que devuelve la misma instancia de su propia clase.

El constructor del Singleton debe estar oculto para el código cliente. La llamada al método `getInstance` debe ser la única forma de obtener el objeto Singleton.

### ¿Cuándo utilizarlo?

*   **Usa el patrón Singleton cuando una clase en tu programa deba tener una sola instancia disponible para todos los clientes; por ejemplo, un único objeto de base de datos compartido por diferentes partes del programa.**
*   **Usa el patrón Singleton cuando necesites un control más estricto sobre las variables globales.**

### Pros y Contras

#### Pros

*   Puedes estar seguro de que una clase tiene una sola instancia.
*   Obtienes un punto de acceso global a esa instancia.
*   El objeto singleton se inicializa solo cuando se solicita por primera vez.

#### Contras

*   Viola el *Principio de Responsabilidad Única*. El patrón resuelve dos problemas a la vez.
*   El patrón Singleton puede enmascarar un mal diseño, por ejemplo, cuando los componentes del programa saben demasiado unos de otros.
*   El patrón requiere un tratamiento especial en un entorno de subprocesos múltiples para que varios subprocesos no puedan crear un objeto singleton varias veces.
*   Puede ser difícil realizar una prueba unitaria del código cliente del Singleton porque muchos frameworks de prueba dependen de la herencia al producir objetos simulados. Como el constructor de la clase singleton es privado y la anulación de métodos estáticos es imposible en la mayoría de los lenguajes, necesitarás una forma creativa de simular el singleton. O simplemente no escribas las pruebas. O no uses el patrón Singleton.

---

## Patrón de Diseño Adapter (Adaptador)

**Adapter** es un patrón de diseño estructural que permite la colaboración entre objetos con interfaces incompatibles.

### Problema que resuelve

Imagina que estás creando una aplicación de monitoreo de mercado bursátil. La aplicación descarga los datos del mercado de múltiples fuentes en formato XML y luego muestra gráficos y diagramas bonitos a los usuarios.

En algún momento, decides mejorar la aplicación integrando una biblioteca de análisis de terceros. Pero hay un problema: la biblioteca solo funciona con datos en formato JSON.

No puedes simplemente cambiar el código de la biblioteca. Y tampoco quieres reescribir todo tu código que trabaja con el formato XML. Entonces, ¿qué puedes hacer?

### ¿Cómo funciona?

Puedes crear un adaptador. Este es un objeto especial que convierte la interfaz de un objeto para que otro objeto pueda entenderla.

Un adaptador envuelve uno de los objetos para ocultar la complejidad de la conversión que ocurre detrás de escena. El objeto envuelto ni siquiera es consciente del adaptador. Por ejemplo, puedes envolver un objeto que opera en metros y kilómetros con un adaptador que convierte todos los datos a unidades imperiales como pies y millas.

Los adaptadores no solo pueden convertir datos a varios formatos, sino que también pueden ayudar a objetos con diferentes interfaces a colaborar.

### Estructura

1.  El **Cliente** es la clase que contiene la lógica de negocio existente del programa.
2.  La **Interfaz del Cliente** describe un protocolo que otras clases deben seguir para poder colaborar con el código cliente.
3.  El **Servicio** es alguna clase útil (normalmente de terceros o heredada). El cliente no puede usar esta clase directamente porque tiene una interfaz incompatible.
4.  El **Adaptador** es una clase que puede trabajar tanto con el cliente como con el servicio: implementa la interfaz del cliente, mientras que envuelve el objeto de servicio. El adaptador recibe llamadas del cliente a través de la interfaz del adaptador y las traduce en llamadas al objeto de servicio envuelto en un formato que pueda entender.
5.  El código cliente no se acopla a la clase adaptadora concreta siempre que trabaje con el adaptador a través de la interfaz del cliente. Gracias a esto, puedes introducir nuevos tipos de adaptadores en el programa sin romper el código cliente existente.

![Estructura del Patrón Adapter](assets/documentation/adapter.png)

Existen dos formas principales de implementar el patrón Adapter:

-   **Adaptador de Objeto (Object Adapter):** Esta implementación utiliza la composición de objetos. El adaptador contiene una instancia del servicio (el objeto que se adapta). Las llamadas del cliente al adaptador se traducen en llamadas a los métodos del objeto de servicio envuelto. Esta es la forma más común y flexible, especialmente en lenguajes que no soportan la herencia múltiple de clases como TypeScript.
-   **Adaptador de Clase (Class Adapter):** Esta implementación utiliza la herencia. El adaptador hereda de la clase del cliente (o implementa su interfaz) y también de la clase del servicio. Esta opción solo es posible en lenguajes que admiten herencia múltiple de clases.

### ¿Cuándo utilizarlo?

*   **Usa el patrón Adapter cuando quieras usar una clase existente, pero su interfaz no sea compatible con el resto de tu código.**
*   **Usa el patrón cuando quieras reutilizar varias subclases existentes que carecen de alguna funcionalidad común que no se puede agregar a la superclase.**

### Pros y Contras

#### Pros

*   *Principio de Responsabilidad Única*. Puedes separar la conversión de la interfaz o de los datos de la lógica de negocio principal del programa.
*   *Principio de Abierto/Cerrado*. Puedes introducir nuevos tipos de adaptadores en el programa sin romper el código cliente existente, siempre que trabajen con los adaptadores a través de la interfaz del cliente.

#### Contras

*   La complejidad general del código aumenta, ya que necesitas introducir un conjunto de nuevas interfaces y clases. A veces es más sencillo cambiar la clase de servicio para que coincida con el resto de tu código.

---

## Patrón de Diseño Composite (Compuesto)

**Composite** es un patrón de diseño estructural que te permite componer objetos en estructuras de árbol y luego trabajar con estas estructuras como si fueran objetos individuales.

### Problema que resuelve

Imagina que tienes dos tipos de objetos: `Productos` y `Cajas`. Una `Caja` puede contener varios `Productos`, así como otras `Cajas`. Estas pequeñas `Cajas` también pueden contener algunos `Productos` o incluso `Cajas` más pequeñas, y así sucesivamente.

Digamos que decides crear un sistema de pedidos. Los pedidos podrían contener tanto productos simples sin empaquetar como cajas llenas de productos. ¿Cómo calcularías el precio total de dicho pedido?

Tendrías que desenvolver todas las cajas, sumar los precios de todos los productos y luego sumar los precios de las cajas. Sería un código muy complicado y propenso a errores, ya que tendrías que conocer las clases concretas de los objetos con los que trabajas.

### ¿Cómo funciona?

El patrón Composite sugiere que trabajes con `Productos` y `Cajas` a través de una interfaz común que declara un método para calcular el precio total.

Este método sería simple para un producto, simplemente devolvería su propio precio. Pero para una caja, iría a través de cada artículo que contiene, le preguntaría su precio y luego devolvería el total de esta caja. Si uno de los artículos es otra caja, esta caja también comenzaría a recorrer su propio contenido y así sucesivamente, hasta que se calculen los precios de todos los componentes.

La mayor ventaja de este enfoque es que no necesitas preocuparte por las clases concretas de los objetos que componen un árbol. No necesitas saber si un objeto es un producto simple o una caja compleja. Puedes tratarlos a todos por igual a través de la interfaz común.

### Estructura

1.  La interfaz **Componente** describe las operaciones que son comunes tanto para los elementos simples como para los complejos del árbol.
2.  La **Hoja (Leaf)** es un elemento básico de un árbol que no tiene sub-elementos. La mayoría de las veces, los componentes hoja son los que hacen el trabajo real, ya que no tienen a nadie a quien delegar el trabajo.
3.  El **Contenedor (Composite)** es un elemento que tiene sub-elementos: hojas u otros contenedores. Un contenedor no conoce las clases concretas de sus hijos. Funciona con todos los sub-elementos solo a través de la interfaz del componente.
4.  El **Cliente** trabaja con todos los elementos a través de la interfaz del componente.

![Estructura del Patrón Composite](assets/documentation/composite.png)

### ¿Cuándo utilizarlo?

*   **Usa el patrón Composite cuando tengas que implementar una estructura de objetos con forma de árbol.**
*   **Usa el patrón cuando quieras que el código cliente trate de la misma manera tanto a los objetos simples como a los complejos.**

### Pros y Contras

#### Pros

*   Puedes trabajar con estructuras de árbol complejas de forma más conveniente: usa polimorfismo y recursividad a tu favor.
*   *Principio de Abierto/Cerrado*. Puedes introducir nuevos tipos de elementos en la aplicación sin romper el código existente que trabaja con el árbol.

#### Contras

*   Puede ser difícil proporcionar una interfaz común para clases que tienen funcionalidades muy diferentes. En ciertos escenarios, tendrías que generalizar en exceso la interfaz del componente, lo que la haría más difícil de comprender.

---

## Patrón de Diseño Decorator (Decorador)

**Decorator** es un patrón de diseño estructural que te permite añadir nuevas funcionalidades a un objeto colocando estos objetos dentro de "envoltorios" especiales que contienen las funcionalidades.

### Problema que resuelve

Imagina que estás trabajando en una biblioteca de notificaciones que permite a otras aplicaciones notificar a sus usuarios sobre eventos importantes.

La versión inicial de la biblioteca solo tenía la clase `Notificador` que enviaba alertas de texto simples a una lista de correos electrónicos que el cliente proporcionaba.

En algún momento, te das cuenta de que los usuarios de la biblioteca querrían más que solo notificaciones por correo electrónico. Muchos de ellos querrían recibir notificaciones de SMS. Otros querrían recibir notificaciones de Facebook. Y, por supuesto, hay gente que querría recibir notificaciones de Slack.

¿Cómo implementaría
