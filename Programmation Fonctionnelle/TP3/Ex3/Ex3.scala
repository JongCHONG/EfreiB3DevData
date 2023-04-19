// Exercice 03 
// Écrire une fonction produit qui calcule le produit des valeurs d'une fonction 
// f(x) pour les points appartenant à l’intervalle [a, b].

object Ex3 extends App {
  def produit(f: Double => Double, a: Double, b: Double): Double = {
    if (a > b) {
      throw new IllegalArgumentException("a doit être inférieur ou égal à b")
    } else {
      var result = 1.0
      var x = a
      while (x <= b) {
        result *= f(x)
        x += 1.0
      }
      result
    }
  }

  def carre(x: Double): Double = x * x

  // Utilisation de la fonction produit avec la fonction auxiliaire carre
  val a = 1.0
  val b = 2.0
  val resultat = produit(carre, a, b)

  println(s"Le produit des carrés de $a à $b est $resultat")
}