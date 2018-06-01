import {Solution} from "./Solution";
import {Reagent} from "./Reagent";
import {Method} from "./method";

export class SolutionsHistory {
  // private _methodTitle: string;
  private method: Method;
  private solution: Solution;
  private reagentsList: Reagent[];
  private solutionCreationDate: Date;


  constructor(method: Method, solution: Solution, reagentsList: Reagent[], solutionCreationDate: Date) {
    this.method = method;
    this.solution = solution;
    this.reagentsList = reagentsList;
    this.solutionCreationDate = solutionCreationDate;
  }

//
//   get method(): Method {
//     return this.method;
//   }
//
//   set method(value: Method) {
//     this.method = value;
//   }
//
//   get solutionCreationDate(): Date {
//     return this.solutionCreationDate;
//   }
//
//   set solutionCreationDate(value: Date) {
//     this.solutionCreationDate = value;
//   }
//
// // constructor(solutionsHistory?: SolutionsHistory) {
//   //   if (solutionsHistory) {
//   //     this._methodTitle = solutionsHistory._methodTitle;
//   //     this._solution = solutionsHistory._solution;
//   //     this._reagentsList = solutionsHistory._reagentsList;
//   //     // this.solutionCreationDate = solutionsHistory.solutionCreationDate;
//   //   }
//   // }
//
//
//   // get methodTitle(): string {
//   //   return this._methodTitle;
//   // }
//   //
//   // set methodTitle(value: string) {
//   //   this._methodTitle = value;
//   // }
//
//   get solution(): Solution {
//     return this.solution;
//   }
//
//   set solution(value: Solution) {
//     this.solution = value;
//   }
//
//   get reagentsList(): Reagent[] {
//     return this.reagentsList;
//   }
//
//   set reagentsList(value: Reagent[]) {
//     this.reagentsList = value;
//   }
}
