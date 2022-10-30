// Retos Opcionales

// Reto 1: Clase Matrix
// Crear la Clase Matrix con la siguiente estructura:
// • Atributo Privado:

// - elements: array of Vector

// • El Constructor debe contener los siguientes parámetros:

// - n: number. Numero de filas
// - m: number. Numero de columnas
// - k:number. Máximo valor de los elementos de la matriz
// Este constructor tiene que crear el atributo elements formado por n objetos de la clase Vector
// con m números aleatorios entre 0 y k.
// • Metodos Públicos:

// - print(). Imprime por consola la matriz.
// - add(m1:Matrix):Matrix. Realiza la suma de elements con m1.
// - multNumber(n:number):Matrix. Realiza el producto entre elements y el número n.
// - mutSpecial(n:number):Matrix.

// Si elements [i,j] es par se multiplica por el numero n
// Si elements[i,j] es impar se multiplica por el numero n-1

// • Para este ejercicio es necesario implementar el método getElements():number[] en la clase Vector.

// Reto 2: Probar la Clase Matrix
// 1. Guardar la clase Matrix en un fichero con extensión .ts (matrix.ts).

// 2. Modificar ese fichero para exportar la clase.

// - export class Matrix

// 3. Importar la clase en otro fichero denominado matrixTest.ts.

// - import { Matrix } from "

// ./matrix”

// 4. Crear un Objeto de la clase Matrix y probar todos sus atributos y métodos.

// Reto 3
// Una de las claves para ser buenos desarrolladores es crear un código limpio en nuestros
// proyectos, para ello debemos tener en cuenta diferentes factores como por ejemplo el
// naming. El naming es la forma de nombrar nuestras variables, funciones, clases etc... en
// JavaScript. Como ya sabéis estos nombres deben ser coherentes y descriptivos para saber
// qué realizan en nuestro código de un vistazo. Existen varias formas de estándarizar estos
// nombres que los desarrolladores seguimos para normalizar el código.

// • Crea una nueva carpeta de proyecto, realiza un npm init y crea un fichero index.ts.
// Después instala el paquete change-case con node y prueba su funcionamiento.

// • Investiga sobre el naming y los tipos de notación camel-case, pascal-case y snake-
// case.

// • Comprueba el estado del package.json. ¿Qué dependencias aparecen? ¿Qué es el
// package.json?

// • Crea una clase llamada Converter que tenga un atributo sentence de tipo string y
// contenga 3 métodos que devuelvan el atributo sentence convertido a camel-case,
// pascal-case y snake-case.

// Reto 4
// • Debemos crear una clase que sea una calculadora primitiva llamada EasyCalc y
// contentga las siguientes características.

// • Debe contener un atributo privado tipo number que almacene el resultado de la última
// operación, por defecto valdrá 0 pero se podrá dar valores al crear una nueva instancia.

// • Debe contener un atributo denominado historial de tipo number[] que registre todos los
// cambios realizados al atributo resultado. Este atributo se inicializará como un array vacío.

// • Debe contener un atributo denominado formatos del tipo que mejor se adapte que
// almacene el valor del atributo resultado en código binario, ASCII, hexadecimal y notación
// científica.

// • Debe contener métodos privados que cambien los atributos historial y formatos de forma
// automática si cambia el atributo resultado. También debe existir métodos getters y setters
// para todos los atributos.

// • Debe contener los métodos suma, resta, multiplicación y división que contengan un único
// parámetro que sea tipo number[], estos métodos deberán crearse también para usarse
// sin necesidad de crear una instancia del objeto, ej. "let result = Math.random();
// ".

// Reto 4 (cont)
// • Se debe crear un método que inicialice a 0 todos los valores de todos los atributos.

// • Debemos crear un nuevo proyecto (npm) y realizar 2 ficheros, easyCalc.ts y test.ts. En
// easyCalc.ts tendremos únicamente el esquema de nuestra clase correctamente
// comentada y en test.ts realizaremos todas las pruebas pertinentes de nuestra clase.

// • Por último publicaremos y crearemos la documentación de nuestra clase en npmjs.com.