// Exercice 06  
// Ecrire une fonction comparateur() qui prend en paramètre deux listes et vérifie si elles sont identiques.

object Ex6 extends App {
  def comparateur[A](l1: List[A], l2: List[A]): Boolean = {
    if (l1.length != l2.length) {
      false
    } else {
      l1.zip(l2).forall { case (a, b) => a == b }
    }
  }

  val l1 = List(1, 2, 3)
  val l2 = List(1, 2, 3)
  val l3 = List(4, 5, 6)

  println(comparateur(l1, l2)) // true
  println(comparateur(l1, l3)) // false

}