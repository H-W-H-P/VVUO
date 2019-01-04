$('#constructor_2d').on('click', function(EO) {
  	toggler = false;
  	redraw();
  });

  // $('#constructor_3d').on('click', function(EO) {
  // 	toggler = true;
  // 	redraw();  	
  // });

  function init() {
    scope.room.fireOnFloorChange(redraw);
    floorPlane = buildFloor();
    console.log('init')
    // roofs look weird, so commented out
    //roofPlane = buildRoof();
  }
  
  function redraw() {
  	console.log('redraw')
    scope.removeFromScene();
    floorPlane = buildFloor();
    // scope.addToScene();
  }

  function buildFloor() {
  	console.log('buildFloor')
    var textureSettings = scope.room.getTexture();
  	if (!toggler) textureSettings.url = "static/const/images/grid3.png";
  	else textureSettings.url = "static/const/images/hardwood.png";
  	console.log(scope.room)
  	toggler = true;
    // setup texture
    var floorTexture = THREE.ImageUtils.loadTexture(textureSettings.url);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(1, 1);
    var floorMaterialTop = new THREE.MeshPhongMaterial({ 
      map: floorTexture, 
      side: THREE.DoubleSide,
      ambient: 0xffffff,
      color: 0xcccccc,
      specular: 0x0a0a0a
    });