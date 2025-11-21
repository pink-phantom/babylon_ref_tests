var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera1", 0, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);

    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 10;

    camera.attachControl(canvas, true);

    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 3, scene);

    var pbr = new BABYLON.PBRSpecularGlossinessMaterial("pbr", scene);
    sphere.material = pbr;

    const diffuseMap = new BABYLON.Texture("/textures/Test_diffuse.jpg", scene);
    pbr.albedoTexture = diffuseMap;
    pbr.albedoColor = new BABYLON.Color3(1.0, 1.0, 1.0);

    const new BABYLON.Texture("/textures/000.jpg", scene);
    pbr.reflectivityTexture = new BABYLON.Texture("/textures/000.jpg", scene);
    pbr.reflectivityColor = new BABYLON.Color3(1.0, 1.0, 1.0);

    const glossinessMap = new BABYLON.Texture("/textures/000.jpg", scene);
    pbr.microSurfaceTexture = glossinessMap;
    pbr.microSurface = 1.0;

    pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/environment.dds", scene);

    return scene;

};
export default createScene
