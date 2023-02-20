import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutocompleteOffDirective } from '../autocomplete-off.directive';

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})

export class SearchComponent{
    
    searchOnSubmit(form: NgForm) {
        console.log(form);

    }
}