import {Component, OnInit} from '@angular/core';
import {SolutionWithReagents} from "../models/SolutionWithReagents";
import {BackendServiceService} from "../backend-service/backend-service.service";
import {MatTableDataSource} from "@angular/material";
import {DataSource} from '@angular/cdk/table';
import {Solution} from "../models/Solution";
import {Reagent} from "../models/Reagent";
import {SolutionsHistory} from "../models/SolutionsHistory";
import {Method} from "../models/method";

interface IResponse {
  methodTitle: string;
  id: string;
  solutionWithReagentsList: SolutionWithReagents[];

}
interface ITest2 {
  reagentsList: Reagent[];
  solution: Solution;
}

// interface ITest {
//   // solutionComponent: string;
//   solutionTitle: string;
// }

interface ITest {
  id: any;
  method: Method;
  solution: Solution;
  reagentsList: Reagent[];
  solutionCreationDate: Date;
}

@Component({
  selector: 'app-display-history-log',
  templateUrl: './display-history-log.component.html',
  styleUrls: ['./display-history-log.component.css']
})


export class DisplayHistoryLogComponent implements OnInit {

  constructor(private backend: BackendServiceService) {
  }

  ngOnInit() {
    this.getFullMethodById();
    this.flag = false;
    this.fetchSolutionsHistory();

  }

  solutionsWithReagents: SolutionWithReagents[] = [];
  dataSource;
  dummy = [];
  dummy2 = [];
  dummy3 = [];
  dummy4 = [];
  flag = false;
  solutionsHistory: SolutionsHistory[] = [];
  history: ITest[] = [];

  displayedColumns = [
    'methodTitle',
    'solutionTitle',
    'solutionComponent'

    // 'solutionComponent'
  ];

  displayForm2() {

    // this.dummy.push(
    this.solutionsWithReagents.forEach(data => {
      data.reagentsList.filter(a => this.dummy2.push(a.solutionComponent));

      this.dummy.push(data.solution.solutionTitle);
      // this.dataSource = data;
      // this.dummy3 = data;
      // data.reagentsList.filter(a => this.dummy2.push(a.solutionComponent));
      console.log('dummy2', this.dummy2);
      console.log('dummy', this.dummy);
      // data.reagentsList.forEach(data => {
      //   console.log('inside for each', data.capacity);
      //
      // });
      // this.dummy.push(data.solution.solutionTitle, data.reagentsList.filter(a => a.solutionComponent));
    });

    const ELEMENT_DATA: ITest2[] = this.solutionsWithReagents;
    this.dataSource = new MatTableDataSource<ITest2>(ELEMENT_DATA);
    console.log('data source',this.dataSource);
    this.flag = true;


  }

  getFullMethodById() {
    console.log('inside get');
    this.backend.getFullMethodById("5afea8c27b7abf21942ad143").then((data: IResponse) => {
      console.log('inside response');
      this.solutionsWithReagents = data.solutionWithReagentsList;
      console.log('data', data);
      console.log('solutions with reagents', this.solutionsWithReagents);
      // this.dataSource = data;
      this.solutionsWithReagents.forEach(el => {
        console.log('solution', el.solution);
        console.log('aa');
      });
      // this.displayForm();
    });
  }

  fetchSolutionsHistory(){
    this.backend.fetchSolutionsHistory().then((solutionsHistory: any) => {
      console.log('solutions history from back', solutionsHistory);
      this.dummy4 = solutionsHistory;
      this.dummy4.forEach(a => {
        this.history.push(a);
        console.log('history', this.history);
        // console.log('history id', this.history.id);
      });

      // this.history.id = solutionsHistory.id;
      console.log('history model', this.dummy4);
      this.displayForm();

    });

  }

  displayForm() {

    const ELEMENT_DATA: ITest[] = this.history;
    this.dataSource = new MatTableDataSource<ITest>(ELEMENT_DATA);
    console.log('data source',this.dataSource);
    this.flag = true;
  }

}
