// Exercice 03 : 
// Soit l’instruction suivante : val seq = 0 until 7 ;. Elle est l’équivalent de 0, 1, 2, 3, 4, 
// 5, 6 (sans le 7) 
// - Ecrire un programme scala qui retourne une collection (vecteur) seq1, tel que 
// chaque élément est 0 until n, avec n une valeur de seq  
// i.e : (0 until 7, 1 until 7, 2 unitl 8, ...) 
// -  Puis transformer ce vecteur en une  liste de valeur composée de toutes les 
// valeurs seq1.  
// i.e : (0, 1, 2, ...7, 1, 2, ...7, 2, 3, ..., 7, 3,..., 7, ...).

object Ex3 extends App {
  val seq = 0 until 7
  println(seq)

  val seq1 = seq.map(x => x until 7)
  println(seq1)

  val seq2 = seq1.flatten
  println(seq2)
}