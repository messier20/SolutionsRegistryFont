import {Reagent} from "./Reagent";
import {Solution} from "./Solution";

export class SolutionWithReagents {
  reagentsList: Reagent[];
  solution: Solution;


  constructor(solutionWithReagents?: SolutionWithReagents) {
    if (solutionWithReagents) {
      this.reagentsList = solutionWithReagents.reagentsList;
      this.solution = solutionWithReagents.solution;
    }
  }
}
