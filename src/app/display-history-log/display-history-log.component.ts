import {Component, OnInit} from '@angular/core';
import {SolutionWithReagents} from "../models/SolutionWithReagents";
import {BackendServiceService} from "../backend-service/backend-service.service";
import {MatTableDataSource} from "@angular/material";
import {Solution} from "../models/Solution";
import {Reagent} from "../models/Reagent";
import {Method} from "../models/method";

interface IResponse {
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
    this.flag = false;
    this.fetchSolutionsHistory();

  }

  solutionsWithReagents: SolutionWithReagents[] = [];
  dataSource;
  dummy4 = [];
  flag = false;
  history: IResponse[] = [];

  displayedColumns = [
    'methodTitle',
    'solutionCode',
    'solutionTitle',
    'solutionValidityDuration',
    'reagentCode',
    'solutionComponent',
    'capacity',
    'reagentValidityDuration',
    'solutionCreationDate'

  ];

  fetchSolutionsHistory() {
    this.backend.fetchSolutionsHistory().then((solutionsHistory: any) => {
      console.log('solutions history from back', solutionsHistory);
      this.dummy4 = solutionsHistory;
      this.dummy4.forEach(a => {
        this.history.push(a);
      });

      this.displayForm();

    });

  }

  displayForm() {

    const ELEMENT_DATA: IResponse[] = this.history;
    this.dataSource = new MatTableDataSource<IResponse>(ELEMENT_DATA);
    this.flag = true;
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <!--<title>Print tab</title>-->
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}
