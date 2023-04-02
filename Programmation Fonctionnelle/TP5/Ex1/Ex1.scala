// Exercice 01 :  
// Soit  la  liste  suivante :  List(« Bonjour",  « Aujourd’hui", « C’est», « La »,  « Fete », 
// « Des », « Papas» ) 
// En utilisant les fonctions vues en cours, écrire un code scala qui permet de :  
// - retourner une nouvelle liste, ou chaque élément représente la longueur 
// du mot à la même position. 
// - Retourner une nouvelle liste, ou chaque élément est un coupe de valeurs 
// (mot, longueur_mot). 

object Ex1 extends App {
  val liste = List("Bonjour", "Aujourd’hui", "C’est", "La", "Fete", "Des", "Papas") 
  println(liste)
  
  val liste1 = liste.map(_.length)
  println(liste1)

  val liste2 = liste.map(mot => (mot, mot.length))

  println(liste2)
}