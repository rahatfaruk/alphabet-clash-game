## About project:
  - Phero module 28 task. My own version. [Source repo](https://github.com/ProgrammingHero1/alphabet-clash-pro-resources)
  - simple game with html, tailwind, js.

### description:
In this project, we will build a simple game. Here, a character is automatically generated; we press a key without looking at the keyboard. If we are correct, then point will increase; otherwise life will decrease. After loosing all life point, the result is shown up and we can restart the game again.

### Game working architecture:
  * show home-section on page load
  * start the game on play-btn click
    * hide all section
    * show play section
    * reset life & score content 
    * generate a random alphabet 
    * setup key press event & update score & life conditionally
    * if life is 0, go to result page and show result
  * Press 'Enter' to start & restart game