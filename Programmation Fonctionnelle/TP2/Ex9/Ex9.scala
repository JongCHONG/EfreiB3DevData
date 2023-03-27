object Ex9 extends App {
  var numbers = Array(4, 5, 2, 3, 7, 1, 6)
  var newArray = Array[Int](7)
  var result = true
  for (num <- numbers) {
    if (num <= 1) {
      result = false;
    }
    if (num == 2) {
      result = false;
    }
    if (num % 2 == 0) {
      result = true;
    }
    if (result == true) {
      newArray = newArray :+ num
    }
  }
  for (num <- newArray) {
    print(num)
  }
}