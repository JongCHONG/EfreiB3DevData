object Ex3 extends App {
  val Matrice1 = Array(Array(1, 9, 4), Array(11, 7, 5), Array(1, 7, 10))  
  val Matrice2 = Array(Array(16, 9, 14), Array(11, 13, 15), Array(12, 17, 10))  
  val Matrice3 = Array(Array(8, 1, 6), Array(3, 5, 7), Array(4, 9, 2))

  //fonction carré Magique
  def carreMagique(mat: Array[Array[Int]]): Boolean = {

    //la somme des lignes
    var sommeDesLignes = 0
    for(i <- 0 until mat.length) {
      var line = 0

      for(j <- 0 until mat(i).length) {
        line = line + mat(i)(j)
      }

      sommeDesLignes += line
    }
    println("La somme des lignes : " + sommeDesLignes)

    //la somme des colonnes
    var sommeDesColonnes = 0
    for(i <- 0 until mat.length) {
      var line = 0

      for(j <- 0 until mat(i).length) {
        line = line + mat(j)(i)
      }

      sommeDesColonnes += line
    }
    println("La somme des colonnes : " + sommeDesColonnes)

    //la somme du diagonal 1
    var sommeDuDiagonal1 = 0
    for(i <- 0 until mat.length) {
      var line = 0

      for(j <- 0 until mat(i).length) {
        line = line + mat(i)(i)
      }

      sommeDuDiagonal1 += line
    }
    println("La somme du diagonal 1: " + sommeDuDiagonal1)

    //la somme du diagonal 2
    var sommeDuDiagonal2 = 0
    for(i <- 0 until mat.length) {
      var line = 0

      for(j <- 0 until mat(i).length) {
        line = line + mat(i)(mat.length-1-i)
      }

      sommeDuDiagonal2 += line
    }
    println("La somme du diagonal 2: " + sommeDuDiagonal2)

    sommeDesLignes == sommeDesColonnes && sommeDesColonnes == sommeDuDiagonal1 && sommeDuDiagonal1 == sommeDuDiagonal2
  }

  if(carreMagique(Matrice1)) {
    println("C'est un carré magique!")
  } else {
    println("Ce n'est pas un carré magique!")
  }
}