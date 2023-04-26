//Rendre les unités, dizaines et centaines "draggable"
$(".draggable").draggable({
  helper: "clone",
  cursor: "move",
});

//Ajouter les éléments trainés et mettre à jour le total
$(".droppable").droppable({
  accept: ".draggable",
  drop: function (event, ui) {
    var draggable = ui.draggable;
    var droppable = $(this);

    // Append the draggable element to the droppable element
    $(ui.draggable).clone().appendTo(droppable.find(".card-body"));
  },
});
