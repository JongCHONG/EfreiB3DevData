// Exercice 05 
// En se basant sur le principe de fonctions imbriquées, écrire une fonction 
// calculatrice() qui prend en paramètre deux nombres entiers et effectue les 
// différentes opérations arithmétiques (+ , -, /, % , *) sur ces nombres. 

object Ex5 extends App {
  def calculatrice(a: Int, b: Int): Unit = {
    def addition(a: Int, b: Int): Int = a + b
    def soustraction(a: Int, b: Int): Int = a - b
    def division(a: Int, b: Int): Double = a.toDouble / b.toDouble
    def modulo(a: Int, b: Int): Int = a % b
    def multiplication(a: Int, b: Int): Int = a * b

    println(s"Addition : ${addition(a, b)}")
    println(s"Soustraction : ${soustraction(a, b)}")
    println(s"Division : ${division(a, b)}")
    println(s"Modulo : ${modulo(a, b)}")
    println(s"Multiplication : ${multiplication(a, b)}")
  }

  calculatrice(10, 5)
}