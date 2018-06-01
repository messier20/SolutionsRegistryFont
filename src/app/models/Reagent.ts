export class Reagent {
  reagentId: any;
  reagentCode: string;
  capacity: string;
  solutionComponent: string;
  reagentValidityDuration: string;
  solutionId: any;

  constructor(reagent?: Reagent) {
    if (reagent) {
      this.reagentId = reagent.reagentId;
      this.reagentCode = reagent.reagentCode;
      this.capacity = reagent.capacity;
      this.solutionComponent = reagent.solutionComponent;
      this.reagentValidityDuration = reagent.reagentValidityDuration;
      this.solutionId = reagent.solutionId;
    }
  }
}
