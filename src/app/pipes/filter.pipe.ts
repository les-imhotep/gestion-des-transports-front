import { Pipe, PipeTransform } from '@angular/core';
import { Covoiturage } from '../models/covoiturage';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Covoiturage[], depart: string, destination: string, dateDepart: string, heureDepart: string): Covoiturage[] {
    console.log(dateDepart+"T"+heureDepart+":00")
    if(!depart && !destination){}
    else if (!destination) {
      return items.filter(it => {
        if(it.annonce.horaireDeDepart.toLowerCase().includes(depart.toLowerCase())){

        }else{
          return it.annonce.lieuDeDepart.toLowerCase().includes(depart.toLowerCase());
        }
      });
    }
    else {
      return items.filter(it => {
        if(it.annonce.lieuDeDestination.toLowerCase().includes(destination.toLowerCase())){
          return it.annonce.lieuDeDepart.toLowerCase().includes(depart.toLowerCase());
        }
      });
    }
  }
}
