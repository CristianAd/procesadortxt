const button = document.getElementById('split-button');
button.addEventListener('click', () => {
  const input = document.getElementById('recursotxt');
  const soyElContenidoPadre = input.value;
  //quitamos los saltos de linea
           var soyElContenido    = soyElContenidoPadre.replace(/\n/g, " ")

           
    ///////////////////////////////////////////7
    // continuamos con la app
  const arrayLimpio = splitarrayLimpio(soyElContenido);

             words  = arrayLimpio
   
          unirPalabras(words);
        
 
         
});


function splitarrayLimpio(soyElContenido) {
    
  // Dividimos el soyElContenidoo en un array de palabras usando el método split
    const arrayLimpio = soyElContenido.split(' ');

  // Filtramos el array para eliminar los elementos que no sean palabras (números y puntos)
  return arrayLimpio.filter(word => /^[a-zA-Z/]+$/.test(word));

 
 
}


const unirPalabras = function joinSlashedWords(words) {
    // Creamos una nueva lista vacía que usaremos para almacenar las palabras unidas
    const joinedWords = [];
          
            const  arrayInicial = joinedWords


/*-------------
            

---------------*/

  
    // Iteramos sobre cada palabra en la lista
    for (let i = 0; i < words.length; i++) {
      // Si la palabra actual tiene un slash al principio o al final
      if (words[i].startsWith('/')  || words[i].endsWith('/') ) {
        // Si la palabra anterior o siguiente no es un slash, unimos la palabra actual con la palabra anterior o siguiente
        if (words[i - 1] !== '/' && words[i + 1] !== '/') {
          joinedWords.push(`${words[i - 1]} ${words[i]} ${words[i + 1]} `); 
         
        }
      } else {
        // Si la palabra no tiene un slash al principio o al final, solo la agregamos a la lista
        joinedWords.push(words[i]);
      }
    }
  
  
       
// Eliminando el problema de duplicidad de elementos del array para que las palabras no se repitan
    for (let i = 0; i < arrayInicial.length; i++) {
      if (arrayInicial[i].includes('/')) {
          arrayInicial.splice(i - 1, 3, arrayInicial[i - 1] + " / "+ arrayInicial[i + 1]);
      }
      }
    
//Asignamos el array limpio a una variable para trabajar con ella y formar los grupos de 4 palabras 
   const arrayFormaGrupos = arrayInicial
   
   for (let i = 0; i < arrayFormaGrupos.length; i += 4) {
   const grupoPalabrasFormado = [arrayInicial[i], arrayInicial[i + 1],  arrayInicial[i + 2],  arrayInicial[i + 3]]

      ///////////////////
      
      const resultados = document.querySelector('.resultados');
      
      for (let i = 0; i < grupoPalabrasFormado.length; i += 4) {
        const grupo = document.createElement('div');
        grupo.innerHTML = `<p>${grupoPalabrasFormado[i]} ${grupoPalabrasFormado[i + 1]} ${grupoPalabrasFormado[i + 2]}</p><p class="wsignificado"> ${grupoPalabrasFormado[i + 3]}</p>`;
        resultados.appendChild(grupo);
      }
      
      ////////////////////

  
  }

    

  }

 

  

  

 
 
  

  
  
  
  

