import {SolutionWithReagents} from "./SolutionWithReagents";

export class MethodWithDetails {
  solutionWithReagents: SolutionWithReagents[];


  constructor(methodWithDetails?: MethodWithDetails) {
    if (methodWithDetails) {
      this.solutionWithReagents = methodWithDetails.solutionWithReagents;
    }
  }
}
