object Ex2 extends App {

  val tab = Array(1, 0, 1, 1, 0, 0, 1, 1, 0, 1)

  def trouver1(tab: Array[Int]): Int = {
    var index = 0
    while (index < tab.length && tab(index) != 1) {
      index += 1
    }
    index
  }

  def propagerValeur(tab: Array[Int], index: Int, x: Int): Unit = {
    if (index < 0 || index >= tab.length || tab(index) != 1) return
    tab(index) = x
    propagerValeur(tab, index - 1, x)
    propagerValeur(tab, index + 1, x)
  }

  var x = 2
  val premierIndex = trouver1(tab)
  propagerValeur(tab, premierIndex, x)
  x += 1
  for (i <- premierIndex+1 until tab.length) {
    if (tab(i) == 1) {
      propagerValeur(tab, i, x)
      x += 1
    }
  }

  println("Tableau modifié : " + tab.mkString(", ")) // Affiche : Tableau modifié : 2, 0, 3,
  
}