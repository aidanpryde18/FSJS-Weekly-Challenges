function getPokemon(call) {
  $.getJSON(call, function(data) {
      currentPokeCall = data;
      readPokemon(currentPokeCall);
      checkButtonState();
  });
};

function readPokemon(data) {
  $.each(data.results, function(i, pokemon) {
    addPokemon(pokemon.name);
  });
};

function addPokemon(name) {
    $(`
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `).appendTo('#pokemon');
};

function clearPokemon() {
  $('#pokemon').html("");
};

function getPokeForm(name) {
  var pokeForm = "http://pokeapi.co/api/v2/pokemon-form/" + name + "/"
  $.getJSON(pokeForm, function(data) {
    addPokeDetail(data);
  });
};

function addPokeDetail(data) {
  var name = data.pokemon.name;
  var front_sprite = data.sprites.front_default;
  var rear_sprite = data.sprites.back_default;
  var front_shiny = data.sprites.front_shiny;
  var rear_shiny = data.sprites.back_shiny;
  $(`
      <li class="poke-card detail"  style="width: 60%">
        <h1>${name}</h1><br>
        <img src="${front_sprite}">
        <img src="${rear_sprite}">
        <img src="${front_shiny}">
        <img src="${rear_shiny}">
      </li>
    `).appendTo('#pokemon');
    $('#previous').hide();
    $('#next').hide();
    $('#back').show();
}

// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.
function checkButtonState() {
  if(currentPokeCall.previous === null) {
    $('#previous').attr("disabled", true);
  } else {
    $('#previous').attr("disabled", false);
  }

  if(currentPokeCall.next === null) {
    $('#next').attr("disabled", true);
  } else {
    $('#next').attr("disabled", false);
  }
};

// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
var pokeAPI = "http://pokeapi.co/api/v2/pokemon/";
var currentPokeCall;
$('#back').hide();
getPokemon(pokeAPI);

// 2.)  Use jQuery to create a click handler for the next and previous buttons.
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.
$("#previous")
  .on('click', function() {
    clearPokemon();
    getPokemon(currentPokeCall.previous);
  });
$("#next")
  .on('click', function() {
    clearPokemon();
    getPokemon(currentPokeCall.next);
  });

  /*  Super Awesome Bonus!
      When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
      type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.

      Be creative, you can style/arrange the detail information however you like!
  */
$('#pokemon')
  .on('click', 'li' , function() {
    $('#pokemon').children().hide();
    getPokeForm($(this).children().text());
    });
$('#back')
  .on('click', function() {
    $('.detail').remove();
    $('#pokemon').children().show();
    $(this).hide();
    $('#previous').show();
    $('#next').show();
  });
