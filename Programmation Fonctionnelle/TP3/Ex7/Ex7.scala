// Exercice 07 (exercice 3 tp2) 
// Ecrire une fonction PaireImpaire() composée de deux fonctions imbriquées paire() 
// et impair(), tel que PaireImpaire() prend en paramètre un tableau d’entiers tab à 
// deux dimensions, la fonction paire() retourne un tableau à une dimension des 
// éléments paire de tab et impaire() retourne un autre tableau à une dimension des 
// éléments impaires de tab

object Ex7 extends App {
  def PaireImpaire(tab: Array[Array[Int]]): (Array[Int], Array[Int]) = {
    def paire(a: Array[Int]): Array[Int] = a.filter(_ % 2 == 0)
    def impair(a: Array[Int]): Array[Int] = a.filter(_ % 2 != 0)

    val paires = tab.flatMap(paire)
    val impaires = tab.flatMap(impair)

    (paires, impaires)
  }

  val tab = Array(Array(1, 2, 3), Array(4, 5, 6), Array(7, 8, 9))
  val (paires, impaires) = PaireImpaire(tab)

  println("Paires : " + paires.mkString(", ")) // Paires : 2, 4, 6, 8
  println("Impaires : " + impaires.mkString(", ")) // Impaires : 1, 3, 5, 7, 9

}