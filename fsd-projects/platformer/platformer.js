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
    toggleGrid();
    


    // TODO 2 - Create Platforms ALSO this is First reward
    createPlatform(300, 630, 30, 20, "purple");
    createPlatform(500, 600, 30, 20, "purple");
 
    createPlatform(700, 490, 30, 20, "purple");
    createPlatform(500, 400, 30, 20, "purple");
    createPlatform(300, 450, 30, 20, "purple");
    createPlatform(200, 300, 150, 10, "purple");
    createPlatform(400, 150, 200, 10, "purple");
    createPlatform(1000, 450, 100, 10, "purple");
    createPlatform(0, 580, 200, 10, "purple");
    createPlatform(0, 0, 200, 590, "black");
    createPlatform(700, 0, 200, 250, "black");
    createPlatform(700, 600, 200, 200, "black");
    createPlatform(800, 500, 100, 100, "black");

    //Second Reward

      createPlatform(1150, 360, 30, 20, "purple");
      createPlatform(950, 260, 30, 20, "purple");
      createPlatform(1150, 190, 30, 20, "purple");
      createPlatform(1250, 190, 200, 10, "purple");
      createCollectable("diamond", 200, 190, 0.5, 0.7);
      createCollectable("grace", 1300, 100, 0.5, 0.7);

  



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons
    createCannon("top", 450, 1000);
    createCannon("top", 1100, 1000);
    createCannon("right", 800, 900);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
