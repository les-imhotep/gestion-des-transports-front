import { Pipe, PipeTransform } from '@angular/core';
import { Covoiturage } from '../models/covoiturage';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Covoiturage[], depart: string, destination: string, dateDepart: string, heureDepart: string): Covoiturage[] {
    console.log(dateDepart+"T"+heureDepart+":00")
    if(!depart && !destination && !dateDepart && !heureDepart){}
    else if (!destination) {
      return items.filter(it => {
          return it.annonce.lieuDeDepart.toLowerCase().includes(depart.toLowerCase());
      });
    }
    else if (!dateDepart && !heureDepart) {
      return items.filter(it => {
        if(it.annonce.lieuDeDestination.toLowerCase().includes(destination.toLowerCase())){
          return it.annonce.lieuDeDepart.toLowerCase().includes(depart.toLowerCase());
        }
      });
    }
    else {
      return items.filter(it => {
        if(it.annonce.lieuDeDestination.toLowerCase().includes(destination.toLowerCase())){
          if(it.annonce.jourDeDepart.toLowerCase().includes(dateDepart.toLowerCase())){
            return it.annonce.lieuDeDepart.toLowerCase().includes(depart.toLowerCase());
          }
        }
      });
    }
  }
}
