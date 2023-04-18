import scala.io.Source
import scala.collection.mutable.ListBuffer

// Lecture du fichier table.txt et stockage des tuples dans une liste
val lines = Source.fromFile("table.txt").getLines().toList
val header = lines.head
val tuples = lines.tail.map(_.split(",").map(_.trim))

// Conversion des tuples en séquence d'items
val itemsSeqs = tuples.map { tuple =>
  tuple.zip(header.split(",")).map { case (value, variable) =>
    s"$variable=$value"
  }.toSeq
}

// Calcul du nombre d'occurrences de chaque item
val itemCounts = itemsSeqs.flatten.groupBy(identity).mapValues(_.size)

// Ordonnancement des tuples en fonction du nombre d'occurrences des items
val sortedTuples = tuples.sortBy { tuple =>
  tuple.map { item =>
    itemCounts.getOrElse(item, 0)
  }.max
}.reverse

// Suppression des items ayant un nombre d'occurrences inférieur ou égal à Smin
val Smin = 3
val filteredTuples = sortedTuples.map { tuple =>
  tuple.filter { item =>
    itemCounts.getOrElse(item, 0) >= Smin
  }
}

// Affichage des tuples filtrés
filteredTuples.foreach { tuple =>
  println(tuple.mkString(", "))
}
