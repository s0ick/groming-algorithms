/*  Exercise 3.1
      Предположим, имеется стек вызовов следующего вида:

      |    greet 2    |
      | name: | s0ick |
      -----------------
      |     greet     |
      | name: | s0ick |

      Что можно сказать о текущем состоянии программы на основании этого стека вызовов?
      А теперь посмотрим, как работает стек вызовов с рекурсивными функциями.

    Answer:
      Функция Greet ждет выполнения функции Greet 2.
*/

/*  Exercise 3.2
      Предположим, вы случайно написали рекурсивную функцию, которая бесконечно вызывает саму себя.
      Как вы уже видели, компьютер вы- деляет память в стеке при каждом вызове функции.
      А что произойдет со стеком при бесконечном выполнении рекурсии?

    Answer:
      Call stack будет переполнен и закончится память, после чего вернется ошибка.
*/
