import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from '../models/annonce';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Annonce[], depart: string, destination: string, dateDepart: string, heureDepart: string): Annonce[] {
    if(!depart && !destination && !dateDepart && !heureDepart){}
    else if (!destination) {
      return items.filter(it => {
          return it.lieuDeDepart.toLowerCase().includes(depart.toLowerCase());
      });
    }
    else if (!dateDepart && !heureDepart) {
      return items.filter(it => {
        if(it.lieuDeDestination.toLowerCase().includes(destination.toLowerCase())){
          return it.lieuDeDepart.toLowerCase().includes(depart.toLowerCase());
        }
      });
    }
    else if (!heureDepart) {
      return items.filter(it => {
        if(it.lieuDeDestination.toLowerCase().includes(destination.toLowerCase())){
          if(it.jourDeDepart.toLowerCase().includes(dateDepart.toLowerCase())){
            return it.lieuDeDepart.toLowerCase().includes(depart.toLowerCase());
          }
        }
      });
    }
    else {
      return items.filter(it => {
        if(it.lieuDeDestination.toLowerCase().includes(destination.toLowerCase())){
          if(it.jourDeDepart.toLowerCase().includes(dateDepart.toLowerCase())){
            return it.lieuDeDepart.toLowerCase().includes(depart.toLowerCase());
          }
        }
      });
    }
  }
}
