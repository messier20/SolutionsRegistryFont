export class Solution {

  solutionId: any;
  solutionCode: number;
  solutionTitle: string;
  solutionValidityDuration: string;
  id: any;


  constructor(solution?: Solution) {
    if(solution) {
      this.solutionId = solution.solutionId;
      this.solutionCode = solution.solutionCode;
      this.solutionTitle = solution.solutionTitle;
      this.solutionValidityDuration = solution.solutionValidityDuration;
      this.id = solution.id;
    }
  }
}
