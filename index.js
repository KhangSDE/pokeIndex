const pokemonMenu = document.querySelector(".menu-image");
const pokemonGen = document.querySelector(".pokemon-gen");
const pokemonGenImage = document.querySelectorAll(".pokemon-gen-image")
pokemonMenu.addEventListener("click", pokemonAnim)
let isActive = false;

function pokemonAnim() {
    if(isActive === false) {
        pokemonGen.classList.add("active");
        for(var i = 0; i < pokemonGenImage.length; i++) {
            if(pokemonGen.classList.contains("active")){
                pokemonGenImage[i].style.transition = "0.4s"
            }
                
        }
        isActive = true;
    }
    else {
        pokemonGen.classList.remove("active");
        for(var i = 0; i < pokemonGenImage.length; i++) {
           
                pokemonGenImage[i].style.transition = "0s"
            
                
        }
        isActive = false;
    }
    

} 
// FETCH API

const pokemonName = document.querySelectorAll(".pokemon-name");
const pokemonImage = document.querySelectorAll(".pokemon-image");
const pokemonId = document.querySelectorAll(".id-number");
const pokemonSearch = document.getElementById("pokemon-search");

function fetchPokemon() {
    
    
    for(var i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        fetch(url).then(response => {
            return response.json();
            
        })
        .then(data => {
             
            
             
            const pokemon = {
                name: data.name,
                image: data.sprites.other['official-artwork'].front_default,
                id: data.id,
                type: data.types.map((type) => type.type.name).join(", ")
            }
                
           

            const markup = `
            <div class="pokemon-container" draggable="true" id="pokemon-${pokemon.id}">
                <img draggable="false" class="pokemon-image" src="${pokemon.image}">
                <p class="pokemon-name" pokemon-name="${pokemon.name}">${pokemon.name}</p>
                <div class="pokemon-information">${pokemon.type}</div>
                <div class="id-number">${pokemon.id}</div>
            </div>
        `;


            document.querySelector("section").insertAdjacentHTML("beforeend", markup)
             

            dragDrop();


            console.log(pokemon);

            
            
        })

    }

}

fetchPokemon()

// POKEMON SUCHE

  pokemonSearch.addEventListener("keyup", (event) => {
    let value = event.target.value;
    let pokemonContainer = document.querySelectorAll(".pokemon-container .pokemon-name");

    pokemonContainer.forEach(pokemon => {
        if (pokemon.getAttribute("pokemon-name").toLowerCase().includes(value.toLowerCase())) {
          pokemon.parentElement.style.display = "flex";
        } else {
          pokemon.parentElement.style.display = "none";
        }
      });
})

pokemonSearch.addEventListener("keyup", (event) => {
    if(event.keyCode === 13) {
        pokemonSearch.blur();
        pokemonSearch.value = "";
    }
})


// API CHANGE GENERATION
const gen1 = document.getElementById("gen-1");
const gen2 = document.getElementById("gen-2");
const gen3 = document.getElementById("gen-3");
const gen4 = document.getElementById("gen-4");
const gen5 = document.getElementById("gen-5");

gen1.addEventListener("click", () => {
    
    document.querySelector("section").innerHTML = ""; 

    function fetchPokemon() {
        for(var i = 1; i <= 151; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
            fetch(url).then(response => {
                return response.json();
                
            })
            .then(data => {
                 

                 
                const pokemon = {
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default,
                    id: data.id,
                    type: data.types.map((type) => type.type.name).join(", ")
                }
                    
               
    
                const markup = `
                <div class="pokemon-container" id="pokemon-${pokemon.id}" draggable="true">
                    <img draggable="false" class="pokemon-image" src="${pokemon.image}">
                    <p class="pokemon-name" pokemon-name="${pokemon.name}">${pokemon.name}</p>
                    <div class="pokemon-information">${pokemon.type}</div>
                    <div class="id-number">${pokemon.id}</div>
                </div>
            `;
    
    
                document.querySelector("section").insertAdjacentHTML("beforeend", markup)
                

                dragDrop()

    
                console.log(pokemon);
                
                
            })
    
        }
    
    }
    fetchPokemon();
    pokemonAnim();

})

gen2.addEventListener("click", () => {
    document.querySelector("section").innerHTML = "";
    function fetchPokemon() {
        for(var i = 152; i <= 251; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
            fetch(url).then(response => {
                return response.json();
                
            })
            .then(data => {
                 
                
                 
                const pokemon = {
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default,
                    id: data.id,
                    type: data.types.map((type) => type.type.name).join(", ")
                }
                    
               
    
                const markup = `
                <div class="pokemon-container" id="pokemon-${pokemon.id}" draggable="true">
                    <img  draggable="false" class="pokemon-image" src="${pokemon.image}">
                    <p class="pokemon-name" pokemon-name="${pokemon.name}">${pokemon.name}</p>
                    <div class="pokemon-information">${pokemon.type}</div>
                    <div class="id-number">${pokemon.id}</div>
                </div>
            `;
    
    
                document.querySelector("section").insertAdjacentHTML("beforeend", markup)
                 
                dragDrop();
    
                console.log(pokemon);
                
                
            })
    
        }
    
    }
    fetchPokemon();
    pokemonAnim();
})

gen3.addEventListener("click", () => {
    document.querySelector("section").innerHTML ="";
    function fetchPokemon() {
        for(var i = 252; i <= 386; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
            fetch(url).then(response => {
                return response.json();
                
            })
            .then(data => {
                 
                
                 
                const pokemon = {
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default,
                    id: data.id,
                    type: data.types.map((type) => type.type.name).join(", ")
                }
                    
               
    
                const markup = `
                <div class="pokemon-container" id="pokemon-${pokemon.id}" draggable="true">
                    <img class="pokemon-image" src="${pokemon.image}" draggable="false">
                    <p class="pokemon-name" pokemon-name="${pokemon.name}">${pokemon.name}</p>
                    <div class="pokemon-information">${pokemon.type}</div>
                    <div class="id-number">${pokemon.id}</div>
                </div>
            `;
    
    
                document.querySelector("section").insertAdjacentHTML("beforeend", markup)
                 
                dragDrop();
    
                console.log(pokemon);
                
                
            })
    
        }
    
    }

    fetchPokemon();
    pokemonAnim();
})

gen4.addEventListener("click", () => {
    document.querySelector("section").innerHTML ="";
    function fetchPokemon() {
        for(var i = 387; i <= 493; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
            fetch(url).then(response => {
                return response.json();
                
            })
            .then(data => {
                 
                
                 
                const pokemon = {
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default,
                    id: data.id,
                    type: data.types.map((type) => type.type.name).join(", ")
                }
                    
               
    
                const markup = `
                <div class="pokemon-container" id="pokemon-${pokemon.id}" draggable="true">
                    <img  draggable="false" class="pokemon-image" src="${pokemon.image}">
                    <p class="pokemon-name" pokemon-name="${pokemon.name}">${pokemon.name}</p>
                    <div class="pokemon-information">${pokemon.type}</div>
                    <div class="id-number">${pokemon.id}</div>
                </div>
            `;
    
    
                document.querySelector("section").insertAdjacentHTML("beforeend", markup)
                 
                dragDrop();
    
                console.log(pokemon);
                
                
            })
    
        }
    
    }

    fetchPokemon();
    pokemonAnim();
})

gen5.addEventListener("click", () => {
    document.querySelector("section").innerHTML ="";
    function fetchPokemon() {
        for(var i = 494; i <= 649; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
            fetch(url).then(response => {
                return response.json();
                
            })
            .then(data => {
                 
                
                 
                const pokemon = {
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default,
                    id: data.id,
                    type: data.types.map((type) => type.type.name).join(", ")
                }
                    
               
    
                const markup = `
                <div class="pokemon-container"  id="pokemon-${pokemon.id}" draggable="true">
                    <img  draggable="false" class="pokemon-image" src="${pokemon.image}">
                    <p class="pokemon-name" pokemon-name="${pokemon.name}">${pokemon.name}</p>
                    <div class="pokemon-information">${pokemon.type}</div>
                    <div class="id-number">${pokemon.id}</div>
                </div>
            `;
    
    
                document.querySelector("section").insertAdjacentHTML("beforeend", markup)
                 
                
                dragDrop();
                console.log(pokemon);
                
                
            })
    
        }
    
    }

    fetchPokemon();
    pokemonAnim();
})

// TEAM CHOOSER
const pokemonTeamButton = document.querySelector(".pokemon-team")
const pokemonTeam = document.querySelector("section");
const pokemonChoose = document.querySelector(".pokemon-choose");
let pokemonTeamActive = false;
pokemonTeamButton.addEventListener("click", () => {
    pokemonTeam.classList.toggle("team");
    
    if(!pokemonTeamActive) {
        pokemonChoose.style.visibility = "visible";
        pokemonTeamActive = true;
    }
    else {
        pokemonChoose.style.visibility = "hidden";
        pokemonTeamActive = false;  
    }
    

})






// DRAG AND DROP

const pokemonContainers = document.getElementsByClassName('pokemon-container');
const dropzone = document.getElementsByClassName("pokemon-choose-container");
 
function dragDrop() {
    for (let i = 0; i < pokemonContainers.length; i++) {
      pokemonContainers[i].addEventListener("dragstart", dragStart);
    }
  
    for (let i = 0; i < dropzone.length; i++) {
      dropzone[i].addEventListener("dragover", dragOver);
      dropzone[i].addEventListener("drop", drop);
    }
  }
  
  function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    
  }
  
  function dragOver(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const pokemonContainerId = event.dataTransfer.getData("text/plain");
    const pokemonContainer = document.getElementById(pokemonContainerId);
    /*for(var i = 0; i < dropzone.length; i++ ) {
        dropzone[i].innerHTML = "";
    } */

    //
   
    
    //
    
    if (event.target.classList.contains("pokemon-choose-container")) {
      
        
        event.target.appendChild(pokemonContainer);
      
    }
  }
 


  

