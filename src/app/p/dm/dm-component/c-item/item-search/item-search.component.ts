import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() getSearchText = new EventEmitter();

  onSearch(ev: any) {
    this.getSearchText.emit(ev.target.value)
  }

}
