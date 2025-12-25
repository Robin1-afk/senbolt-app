import { Component, ElementRef, Input, SimpleChanges } from '@angular/core';
import L, { Map, tileLayer,marker, MarkerOptions } from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'spk-leaflet-map',
  standalone: true,
  imports: [LeafletModule,CommonModule],
  templateUrl: './spk-leaflet-map.component.html',
  styleUrl: './spk-leaflet-map.component.scss'
})
export class SpkLeafletMapComponent {
  @Input() mapId!: string; // Unique ID for the map container
  @Input() center: [number, number] = [51.505, -0.09];
  @Input() zoom: number = 13;
  @Input() layers: L.Layer[] = [];
  @Input() tileLayerUrl: string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  @Input() tileLayerOptions: L.TileLayerOptions = {
    maxZoom: 18,
    attribution: '© OpenStreetMap',
  };

  private map!: L.Map;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  ngOnDestroy(): void {
    this.destroyMap();
  }

  private initializeMap(): void {
    // Ensure the container exists before initializing the map
    const mapContainer = this.elementRef.nativeElement.querySelector(`#${this.mapId}`);
    if (!mapContainer) {
      console.error(`Map container with ID '${this.mapId}' not found.`);
      return;
    }

    this.map = L.map(this.mapId).setView(this.center, this.zoom);

    // Add the tile layer
    L.tileLayer(this.tileLayerUrl, this.tileLayerOptions).addTo(this.map);

    // Add additional layers if provided
    this.layers.forEach((layer) => layer.addTo(this.map));
  }

  private destroyMap(): void {
    if (this.map) {
      this.map.remove(); // Properly destroys the Leaflet map instance
      this.map = undefined as any; // Reset the map reference
    }
  }
}
