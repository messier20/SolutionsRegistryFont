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

  selectedToOpen = false;
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
    <!--<body onload="window.print();window.close()">-->
     <!--<table mat-table [dataSource]="dataSource.filteredData" class="mat-elevation-z8">-->


      <!--<ng-container matColumnDef="methodTitle">-->
        <!--<th mat-header-cell *matHeaderCellDef> Metodo žymuo/pavadinimas</th>-->
        <!--<td mat-cell *matCellDef="let element">-->
          <!--{{element.method.methodTitle}}-->
        <!--</td>-->
      <!--</ng-container>-->
      <!--<ng-container matColumnDef="solutionTitle">-->
        <!--<th mat-header-cell *matHeaderCellDef> Tirpalo pavadainimas, tirpalo koncentracija</th>-->
        <!--<td mat-cell *matCellDef="let element"> {{element.solution.solutionTitle}}</td>-->
      <!--</ng-container>-->

      <!--<ng-container matColumnDef="solutionCode">-->
        <!--<th mat-header-cell *matHeaderCellDef> Tirpalo kodas</th>-->
        <!--<td mat-cell *matCellDef="let element"> {{element.solution.solutionCode}}</td>-->
      <!--</ng-container>-->

      <!--<ng-container matColumnDef="solutionValidityDuration">-->
        <!--<th mat-header-cell *matHeaderCellDef> Tirpalo galiojimo trukmė</th>-->
        <!--<td mat-cell *matCellDef="let element"> {{element.solution.solutionValidityDuration}}</td>-->
      <!--</ng-container>-->

      <!--<ng-container matColumnDef="solutionCreationDate">-->
        <!--<th mat-header-cell *matHeaderCellDef> Tirpalo pagaminimo data</th>-->
        <!--<td mat-cell *matCellDef="let element"> {{element.solutionCreationDate}}</td>-->
      <!--</ng-container>-->


      <!--<ng-container matColumnDef="solutionComponent">-->
        <!--<th mat-header-cell *matHeaderCellDef> Tirpalo komponentai</th>-->
        <!--<td mat-cell *matCellDef="let element">-->
          <!--<div *ngFor="let a of element.reagentsList">-->
            <!--{{a.solutionComponent}}-->
          <!--</div>-->
        <!--</td>-->
      <!--</ng-container>-->

      <!--<ng-container matColumnDef="capacity">-->
        <!--<th mat-header-cell *matHeaderCellDef> Kiekis/tūris</th>-->
        <!--<td mat-cell *matCellDef="let element">-->
          <!--<div *ngFor="let a of element.reagentsList">-->
            <!--{{a.capacity}}-->
          <!--</div>-->
        <!--</td>-->
      <!--</ng-container>-->

      <!--<ng-container matColumnDef="reagentCode">-->
        <!--<th mat-header-cell *matHeaderCellDef> Reagento kodas</th>-->
        <!--<td mat-cell *matCellDef="let element">-->
          <!--<div *ngFor="let a of element.reagentsList">-->
            <!--{{a.reagentCode}}-->
          <!--</div>-->
        <!--</td>-->
      <!--</ng-container>-->

      <!--<ng-container matColumnDef="reagentValidityDuration">-->
        <!--<th mat-header-cell *matHeaderCellDef> Reagento galiojimo trukmė</th>-->
        <!--<td mat-cell *matCellDef="let element">-->
          <!--<div *ngFor="let a of element.reagentsList">-->
            <!--{{a.reagentValidityDuration}}-->
          <!--</div>-->
        <!--</td>-->
      <!--</ng-container>-->

      <!--<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>-->
      <!--<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>-->
    <!--</table>-->
</body>
      </html>`
    );
    popupWin.document.close();
  }

  selectMethod(id: IResponse) {
    this.selectedToOpen = true;
    console.log(this.selectedToOpen);
    console.log(id);
  }
}
