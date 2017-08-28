import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {

    transform(value: string[], q: string) {
        
        if (!q || q === '') {
            return value;
        }
        
        return value.filter(item => (item.marca.toLowerCase().indexOf(q.toLowerCase()) != -1) || item.combustivel.toLowerCase().indexOf(q.toLowerCase()) != -1));
    }
}