import scala.math.pow

object Ex3 extends App {

  // def f1(x: Double): Double = x * x
  // def f2(x: Double): Double = pow(2, x)
  // def f3(x: Double): Double = pow(x, x)

  // def sumOfFunctions(x: Double): Double = f1(x) + f2(x) + f3(x)

  // val x = 2
  // val sum = sumOfFunctions(x)

  // println(s"La somme des fonctions pour x=$x est $sum")

  def F(x: Int) = x * x

  def G = ex2(x => x * x)(2, 4).toInt

  def H = ex2(x => math.pow(x, x).toInt)(1, 3)

  def ex2(f: Int => Int): (Int, Int) => Int = {
    def ex2Interior(x: Int, y: Int): Int = {
      if (x > y) 0 else f(x) + ex2Interior(x + 1, y)
    }
    ex2Interior
  }

  println(ex2(x => x)(1, 5))
  println(G)
  println(H)
}