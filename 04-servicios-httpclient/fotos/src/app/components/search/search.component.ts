import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'imagina-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: string;

  @Output("search")
  public doSearch: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.search= ""
  }

  ngOnInit(): void {
  }

  onSearch() {
    this.doSearch.emit(this.search)
  }

  // onChange( e:any){
  //   console.log("changed event", e)
  //   this.search = e.target?.value
  // }

}
