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


}
