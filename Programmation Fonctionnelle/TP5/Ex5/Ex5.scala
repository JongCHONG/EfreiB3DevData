import scala.io.Source

object Ex5 extends App {
  case class SeqItem(variable: String, value: String)

  val Smin = 3

  val tuples = Source.fromFile("table.txt").getLines().map(line => {
    val values = line.split(" ")
    (values(0), values.slice(1, values.length).toList)
  }).toList

  val seqs = tuples.map(tuple => {
    val seq = tuple._2.map(v => SeqItem(s"x${tuple._2.indexOf(v) + 1}", v))
    seq
  })

  val flatSeq = seqs.flatten

  val itemCounts = flatSeq.groupBy(identity).mapValues(_.size)

  val filteredTuples = tuples.map(tuple => {
    val filteredSeq = tuple._2.filter(v => itemCounts(SeqItem(s"x${tuple._2.indexOf(v) + 1}", v)) >= Smin)
    (tuple._1, filteredSeq)
  })

  filteredTuples.foreach(println)
}
