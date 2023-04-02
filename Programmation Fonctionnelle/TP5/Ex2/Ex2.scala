// Exercice 02 : 
// Soit la Map suivante : Map(1 -> "un", 2 -> "Deux", 3 -> "Trois", "Quatre", 
// 5 -> "Cinq", 6-> "Six" ); 
// - Ecrire une programme scala qui permet d’écrire les valeurs de la Map en 
// majuscule. 
 
object Ex2 extends App {
  val liste = Map(1 -> "un", 2 -> "Deux", 3 -> "Trois", 4 ->  "Quatre", 5 -> "Cinq", 6-> "Six" )
  println(liste)
  
  val liste1 = liste.values.map(_.toUpperCase())
  println(liste1)

  val liste2 = liste.mapValues(_.toUpperCase())
  println(liste2)
}