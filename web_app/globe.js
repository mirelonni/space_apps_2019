var wwd = new WorldWind.WorldWindow("canvasOne");

wwd.addLayer(new WorldWind.BMNGLayer());
// wwd.addLayer(new WorldWind.BMNGLandsatLayer());
wwd.addLayer(new WorldWind.AtmosphereLayer());

// wwd.addLayer(new WorldWind.CompassLayer());
// wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
// wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));