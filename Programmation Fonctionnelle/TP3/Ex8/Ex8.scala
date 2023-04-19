// Exercice 08 :  
// Ecrire une fonction qui prend en paramètre une matrice carrée (n*n)  et qui 
// composée de deux fonctions imbriquées : 
//  La première fonction vérifie si la matrice passée en paramètre est un carré 
// magique 
//  La deuxième fonction vérifie si la matrice passée en paramètre est un carré 
// parfait 

object Ex8 extends App {

  def verifierMatrice(matrice: Array[Array[Int]]): Unit = {
    def estCarreMagique(): Boolean = {
      val sommeAttendue = matrice.length * (matrice.length * matrice.length + 1) / 2
      val sommeDiagPrincipale = (0 until matrice.length).map(i => matrice(i)(i)).sum
      val sommeDiagSecondaire = (0 until matrice.length).map(i => matrice(i)(matrice.length - 1 - i)).sum
      val sommeLignes = matrice.map(_.sum).distinct
      val sommeColonnes = matrice.transpose.map(_.sum).distinct
      sommeAttendue == sommeDiagPrincipale && sommeDiagPrincipale == sommeDiagSecondaire && sommeLignes.size == 1 && sommeColonnes.size == 1 && sommeLignes.head == sommeColonnes.head && sommeColonnes.head == sommeDiagPrincipale
    }
    
    def estCarreParfait(): Boolean = {
      val sommeAttendue = matrice.length * (matrice.length * matrice.length + 1) / 2
      matrice.flatten.sorted == (1 to matrice.length * matrice.length).toArray && estCarreMagique() && matrice.map(_.sum).forall(_ == sommeAttendue) && matrice.transpose.map(_.sum).forall(_ == sommeAttendue)
    }
    
    if (estCarreMagique()) {
      println("La matrice est un carré magique.")
    } else {
      println("La matrice n'est pas un carré magique.")
    }
    
    if (estCarreParfait()) {
      println("La matrice est un carré parfait.")
    } else {
      println("La matrice n'est pas un carré parfait.")
    }
  }

  val matriceMagique3 = Array(
    Array(2, 7, 6),
    Array(9, 5, 1),
    Array(4, 3, 8)
  )

  val matriceMagique4 = Array(
    Array(16, 23, 17, 14),
    Array(5, 24, 7, 20),
    Array(22, 15, 13, 18),
    Array(10, 11, 25, 2)
  )

  val matriceParfaite3 = Array(
    Array(6, 7, 2),
    Array(1, 5, 9),
    Array(8, 3, 4)
  )

  val matriceParfaite4 = Array(
    Array(16, 2, 3, 13),
    Array(5, 11, 10, 8),
    Array(9, 7, 6, 12),
    Array(4, 14, 15, 1)
  )

  verifierMatrice(matriceMagique3)
  verifierMatrice(matriceMagique4)
  verifierMatrice(matriceParfaite3)
  verifierMatrice(matriceParfaite4)
}