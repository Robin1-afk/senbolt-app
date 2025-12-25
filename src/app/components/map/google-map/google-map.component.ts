
import {Component} from '@angular/core';
import {GoogleMap, MapGroundOverlay, MapMarker,MapKmlLayer,MapHeatmapLayer,MapTrafficLayer} from '@angular/google-maps';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [SharedModule,GoogleMap,MapGroundOverlay,MapMarker,MapKmlLayer,MapHeatmapLayer,MapTrafficLayer],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent {
  google: any;
  googleMap: { lat: number, lng: number } | undefined;
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display!: google.maps.LatLngLiteral;
  kmlUrl = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
 
  center1 = {lat: 37.774546, lng: -122.433523};
  zoom1 = 12;
  heatmapOptions = {radius: 5};
  heatmapData = [
    {lat: 37.782, lng: -122.447},
    {lat: 37.782, lng: -122.445},
    {lat: 37.782, lng: -122.443},
    {lat: 37.782, lng: -122.441},
    {lat: 37.782, lng: -122.439},
    {lat: 37.782, lng: -122.437},
    {lat: 37.782, lng: -122.435},
    {lat: 37.785, lng: -122.447},
    {lat: 37.785, lng: -122.445},
    {lat: 37.785, lng: -122.443},
    {lat: 37.785, lng: -122.441},
    {lat: 37.785, lng: -122.439},
    {lat: 37.785, lng: -122.437},
    {lat: 37.785, lng: -122.435}
  ];
  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng!.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display! = event.latLng!.toJSON();
  }
 

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };
  
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng!.toJSON());
  }
}

if (typeof window.google !== 'undefined') {
  // Use Google Maps API here
} else {
  console.error('Namespace \'google\' not found. Make sure the Google Maps API is properly loaded.');
}
