const school = "Coder";

/*
Essa função retorna que caracter está no index digitado
This function returns which character is in the index entered
*/
console.log(school.charAt(4));

/*
Essa função retorna o valor do caracter em ASCII
This function returns the value of the character in ASCII
*/
console.log(school.charCodeAt(4));

/*  
Essa função retorna qual é o index do caracter digitado
This function returns the index of the character entered
*/
console.log(school.indexOf("C"));

/*
Essa função retorna o caracter a partir de pontos de partida, o primeiro digito é onde a função vai começar e o ultimo é onde ela vai parar.
This function returns the character from starting points, the first digit is where the function will start and the last is where it will stop.
*/
console.log(school.substring(0,4));

/*
Essa função retorna uma concatenação, podendo colocar no inicio ou no fim da variável selecionada
This function returns a concatenation, which can be placed at the beginning or end of the selected variable
*/
console.log("School ".concat(school).concat("!"));

/*
Essa função substitui um index selecionado por um outro caracter desejado
This function replaces a selected index with another desired character
*/
console.log(school.replace(3, '3'));

/*
Essa função cria um array usando um delimitador como localização
This function creates an array using a delimiter as location
*/
console.log("Ana, Maria, Pedro".split(","));