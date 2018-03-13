import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Guest } from './guest'
import { Subject } from 'rxjs/Subject';
import { SearchService } from './search.service';

@Pipe({
    name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe {
    
    // transform(items: Guest[], field: string, value: string): any[] {
    //     console.log("Hey Issa : " + items ) 
    //     if (!items) return [];
    //     return items.filter(it => it[field] == value);
    // }

    transform(value: any, input: string) {
        if (input) {
                console.log("Hey Issa : " + input )
                console.log("Hey Issa VALUE : " + value.length ) 
                input = input.toLowerCase();
                for (var i = 0; i < value.length; i++) {
                    var element = value[i].email;
                    console.log(element);
                    console.log(input);
                    if (element.toLowerCase === input.toLowerCase) {
                        //return element;
                        console.log("FINALLY!")
                    }
                }
                
            }
            return value;
    }


    // results: Object;
    // searchTerm$ = new Subject<string>();
  
    // constructor(private searchService: SearchService) {
    //   this.searchService.search(this.searchTerm$)
    //     .subscribe(results => {
    //       this.results = results.results;
    //     });
    // }

}