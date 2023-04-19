// Exercice 01 
// Créer une MAP dont les clés représentent les noms des salariés d’une division et 
// les valeurs représentent leur salaire. 
// Ecrire une fonction pure qui calcul la moyenne des salaires des employés  de cette 
// division.

// Création de la carte avec les noms des salariés et leur salaire
val salaires = Map(
  "Alice" -> 3000.0,
  "Bob" -> 2500.0,
  "Charlie" -> 4000.0,
  "David" -> 3500.0,
  "Eve" -> 2800.0
)
object Ex1 extends App {
  // Définition d'une fonction pure pour calculer la moyenne des salaires
  def moyenneSalaires(salaires: Map[String, Double]): Double = {
    val total = salaires.values.sum
    val nombreSalaries = salaires.size
    total / nombreSalaries
  }

  // Appel de la fonction pour obtenir la moyenne des salaires
  val moyenne = moyenneSalaires(salaires)

  println(s"La moyenne des salaires est de : $moyenne")
}