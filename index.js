function myFunction() {
  // asks the user to input the Website Name
  var word = prompt("Enter The Website Name Here : (Ex : Youtube)");

  // turns the website name to all lowercase letters
  word = word.toLowerCase();

  // I just made a variable called "reversedWord" with nothing in it
  reversedWord = "";

  /*
    I am reversing word and assigning the reversed word to the reversedWord variable I made above ^^^
  */
  for(var i = word.length-1; i >= 0; i--){
    reversedWord = reversedWord + word.charAt(i);
  }

  // I am asking the user which letter they would like to replace from the website name
  var whichLetterToRemoveFromWord = prompt("Which letter would you like to remove from " + word + "?");

  // I am now asking the user to put a different in the space of the letter they just removed
  var replaceTheLetterYouJustRemovedWithAnotherLetter = prompt("What letter would you like to replace " + whichLetterToRemoveFromWord + " with?");

  // Removes the letters that they user asked and replace it with the NEW letter the user asked for
  reversedWord = reversedWord.replace(whichLetterToRemoveFromWord,replaceTheLetterYouJustRemovedWithAnotherLetter);

  // A integer variable that will represent the Java Ascii Value
  var AsciiValue = 0;

  /*
    This goes through the whole the word and finds the last letter. Then whatever the last letter it is it will do that code.

    For example if the last letter of the website is 'a'. It will take the 'a' and turn it into the letter 'b'
    Then it will assign the variable AsciiValue to the Ascci Value of the previous letter. In this case it would be 'a'. So the Ascii Value would be 97, becasue that's the Ascii of 'a' in java.

  */

  if(reversedWord.charAt(reversedWord.length-1) == 'a') {
              reversedWord = reversedWord.replace('a', 'b');
              AsciiValue = 97;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'b') {
              reversedWord = reversedWord.replace('b', 'c');
              AsciiValue = 98;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'c') {
              reversedWord = reversedWord.replace('c', 'd');
              AsciiValue = 99;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'd') {
              reversedWord = reversedWord.replace('d', 'e');
              AsciiValue = 100;
          }
          if(reversedWord.charAt(reversedWord.length-1) == 'e') {
              reversedWord = reversedWord.replace('e', 'f');
              AsciiValue = 101;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'f') {
              reversedWord = reversedWord.replace('f', 'g');
              AsciiValue = 102;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'g') {
              reversedWord = reversedWord.replace('g', 'h');
              AsciiValue = 103;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'h') {
              reversedWord = reversedWord.replace('h', 'i');
              AsciiValue = 104;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'i') {
              reversedWord = reversedWord.replace('i', 'j');
              AsciiValue = 105;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'j') {
              reversedWord = reversedWord.replace('j', 'k');
              AsciiValue = 106;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'k') {
              reversedWord = reversedWord.replace('k', 'l');
              AsciiValue = 107;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'l') {
              reversedWord = reversedWord.replace('l', 'm');
              AsciiValue = 108;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'm') {
              reversedWord = reversedWord.replace('m', 'n');
              AsciiValue = 109;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'n') {
              reversedWord = reversedWord.replace('n', 'o');
              AsciiValue = 110;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'o') {
              reversedWord = reversedWord.replace('o', 'p');
              AsciiValue = 111;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'p') {
              reversedWord = reversedWord.replace('p', 'q');
              AsciiValue = 112;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'q') {
              reversedWord = reversedWord.replace('q', 'r');
              AsciiValue = 113;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'r') {
              reversedWord = reversedWord.replace('r', 's');
              AsciiValue = 114;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 's') {
              reversedWord = reversedWord.replace('s', 't');
              AsciiValue = 115;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 't') {
              reversedWord = reversedWord.replace('t', 'u');
              AsciiValue = 116;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'u') {
              reversedWord = reversedWord.replace('u', 'v');
              AsciiValue = 117;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'v') {
              reversedWord = reversedWord.replace('v', 'w');
              AsciiValue = 118;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'w') {
              reversedWord = reversedWord.replace('w', 'x');
              AsciiValue = 119;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'x') {
              reversedWord = reversedWord.replace('x', 'y');
              AsciiValue = 120;
          }
          else if(reversedWord.charAt(reversedWord.length-1) == 'z') {
              reversedWord = reversedWord.replace('z', 'a');
              AsciiValue = 121;
          }

  /*
    This just prints the first half of the word, then puts the AsciiValue in the middle of it, and then lastly
    it puts the last half of the word.

    document.getElementById("demo").innerHTML = "Your Password is : " + reversedWord.substring(0,reversedWord.length/2) + "" + AsciiValue
  + reversedWord.substring(reversedWord.length/2,reversedWord.length);
  */
    alert ("Your Password is : " + reversedWord.substring(0,reversedWord.length/2) + "" + AsciiValue
    + reversedWord.substring(reversedWord.length/2,reversedWord.length));
}
