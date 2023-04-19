// Ecrire une fonction qui permet de calculer une suite de Fibonacci 
// F0 = 0 et F1 = 1 
// Fn = Fn-1 + Fn-2 
// Def 
// fib(n: 
// Int): 
// Int = 
// {  
//     def go(n: Int, first: Int, second: Int): Int =  
//       if(n == 1) first  
//       else if (n == 2) second  
//       else go(n-1, second, first + second)  
//     go(n, 0, 1)  
//   }

object Ex4 extends App {
  def fib(n: Int): Int = {
    def go(n: Int, first: Int, second: Int): Int =
      if (n == 1) first
      else if (n == 2) second
      else go(n-1, second, first + second)
    
    go(n, 0, 1)
  }

  // Calculer les 10 premiers éléments de la suite de Fibonacci
  for (i <- 1 to 10) {
    println(fib(i))
  }
}