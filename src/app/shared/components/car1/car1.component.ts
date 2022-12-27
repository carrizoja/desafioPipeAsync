import { Component, OnDestroy } from '@angular/core';
import { TrafficLightService } from '../../../services/traffic-light.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-car1',
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.scss']
})
export class Car1Component implements OnDestroy {
  lightsSubcription: Subscription;
constructor(public trafficLightService: TrafficLightService  ) { 
  this.lightsSubcription = this.trafficLightService.lights$.subscribe(console.log)

}
ngOnDestroy(): void {
  this.lightsSubcription.unsubscribe()
}
}
