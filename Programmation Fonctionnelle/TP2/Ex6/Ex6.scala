object Ex6 extends App {
  var numbers = Array(4, 5, 2, 3, 7, 1, 6)
  var newArray = new Array[Int](7)
  var temp: Int = 0
  for (num <- numbers) {
    if (temp > num) {
      newArray = newArray :+ num
    } else {
      temp = num
    }
  }
  for (num <- newArray) {
    print(num)
  }
}