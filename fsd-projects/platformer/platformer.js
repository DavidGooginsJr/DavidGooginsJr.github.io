$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    for (let i = 0; i < 10; i++) {
      createPlatform(500 + 80 * i, canvas.height - 80 * i, 100, 10);
      createPlatform(800 + 80 * i, canvas.height - 80 * i, 100, 10);
    }

    // TODO 3 - Create Collectables
    createCollectable("diamond", 600, 600);
    createCollectable("grace", 700, 500);
    createCollectable("kennedi", 800, 400);
    createCollectable("max", 900, 300);
    createCollectable("steve", 1000, 200);
    // TODO 4 - Create Cannons
    for (let i = 0; i < 3; i++) {
      createCannon("right", canvas.height - 300 * i, 1000 + 200 * i);
      createCannon("left", 300 * i, 1000 + 20 * i);
    }

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
