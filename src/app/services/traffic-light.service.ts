import { Injectable } from '@angular/core';
import { interval, Subject, Observable, BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class TrafficLightService {
  private lights = new BehaviorSubject<string>('green')
  public lights$ = this.lights.asObservable() // converts subject to observable
  obs$ = new Observable()
  private lastValue: string | null = null

  constructor() { 
    this.lights.subscribe((value) => (this.lastValue = value))
    // use interval with pipe and map to change the value of the subject
    interval(1000).pipe(map((value: any) => value.data)
    ).subscribe(() => this.lastValue === 'green' ? this.lights.next('rojo') : this.lights.next('green')) 

  }
}
