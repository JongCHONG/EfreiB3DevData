object Ex1 extends App {

  val L1 = List("Stephanie", "Alex", "Alia", "Marie", "Pauline", "Malik", "Ayelana")
  val L2 = List(2800, 3100, 3450, 2400, 2500, 2250, 4500)

  val employesSalaires = L1.foldLeft(Map[String, Int]()) {
    (map, employe) => map + (employe -> L2(L1.indexOf(employe)))
  }
  employesSalaires.foreach(println)

  val employesSalairesFiltres = employesSalaires.filter(_._2 >= 3000)
  employesSalairesFiltres.foreach(println)

}