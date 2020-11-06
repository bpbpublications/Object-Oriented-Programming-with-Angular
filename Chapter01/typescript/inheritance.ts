export class Map {
  zoomIn() {
    console.log('base zoom in');
  }
}

export class gMap extends Map {
  zoomIn() {
    console.log('gMap zoomin')
  }
}

var map: Map = new gMap();
map.zoomIn();
