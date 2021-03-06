import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { AuthorInfo } from '../../models/authorInfo';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

    author: AuthorInfo;

    constructor(private authorService: AuthorService,
                private _route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this._route.params
                .switchMap((params: Params) => this.authorService.getAuthor(+params['id'])).subscribe(
                    data => {
                        this.author = data as AuthorInfo;
                        console.log(data);
                    },
                    error => {
                        console.log(error);
                    }
            ); 
    }

    

}
