var createScene = function (engine, canvas) {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera1", 0, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);

    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 10;

    camera.attachControl(canvas, true);

    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 3, scene);

    var pbr = new BABYLON.PBRSpecularGlossinessMaterial("pbr", scene);
    sphere.material = pbr;

    const diffuseMap = new BABYLON.Texture("Test_diffuse.jpg", scene);
    pbr.albedoTexture = diffuseMap;
    pbr.albedoColor = new BABYLON.Color3(1.0, 1.0, 1.0);

    const reflectivityMap = new BABYLON.Texture("050.jpg", scene);
    pbr.reflectivityTexture = reflectivityMap;
    pbr.reflectivityColor = new BABYLON.Color3(1.0, 1.0, 1.0);
    
    const glossinessMap = new BABYLON.Texture("100.jpg", scene);
    pbr.microSurfaceTexture = glossinessMap;
    pbr.microSurface = 1.0;

    pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("_textures_environment.dds", scene);

    return scene;

};
export default createScene
