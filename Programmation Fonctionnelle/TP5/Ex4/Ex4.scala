// Exercice 04 :  
// Soit la liste suivante : val liste = List("10", "52", "65", "85", "96", "42", "88", "32", 
// "83", "122", "823", "786", "95", "81", "87", "13", "19", "78", "65", "485", "62", "55", 
// "292", "472", "712"); 
// - Avec  une  seule  instruction,  calculer  la  somme  des  nombres  paires  de 
// cette liste. 

object Ex4 extends App {
  val liste = List("10", "52", "65", "85", "96", "42", "88", "32", "83", "122", "823", "786", "95", "81", "87", "13", "19", "78", "65", "485", "62", "55", "292", "472", "712"); 
  println(liste)

  val sumOfEvenNumbers = liste.filter(_.toInt % 2 == 0).map(_.toInt).sum
  println(sumOfEvenNumbers)
}