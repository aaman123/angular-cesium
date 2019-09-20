import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

declare let L;

@Component({
  selector: 'app-livewindows',
  templateUrl: './livewindows.component.html',
  styleUrls: ['./livewindows.component.css']
})
export class LivewindowsComponent implements OnInit {
  constructor() { }

  map: Map;


  ngOnInit() {
      this.map = new L.Map('mapId').setView([22.644800, 72.216721], 10);
      tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'edupala.com © ionic LeafLet',
      }).addTo(this.map);

    }
  }



