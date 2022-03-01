import { Component, OnInit } from '@angular/core';
import { MyFinTechDataService } from '../services/my-fin-tech-data.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public myFinTechDataFinData: any = null;

  constructor(
    private myFinTechDataService: MyFinTechDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.myFinTechDataService.getFinData().subscribe(data => this.myFinTechDataFinData = data);
  }
}
