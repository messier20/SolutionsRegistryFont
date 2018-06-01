import {Component, OnInit} from '@angular/core';
import {BackendServiceService} from "../backend-service/backend-service.service";
import {Method} from "../models/method";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import {SolutionWithReagents} from "../models/SolutionWithReagents";
import {Reagent} from "../models/Reagent";
import {Solution} from "../models/Solution";
import {SolutionsHistory} from "../models/SolutionsHistory";


interface IResponse {
  methodTitle: string;
  id: string;
  solutionWithReagentsList: SolutionWithReagents[];

}

@Component({
  selector: 'app-display-methods',
  templateUrl: './display-methods.component.html',
  styleUrls: ['./display-methods.component.css']
})
export class DisplayMethodsComponent implements OnInit {

  methods: Method[] = [];
  selectedMethod: Method;
  // ObjectId = require('mongodb').ObjectId;
  methodId: string;
  methodTitle;
  solution: Solution;
  id: string;
  currentReagents: Reagent[] = [];
  inputForm: FormGroup;
  foods = [];
  methodDetails = [];
  solutionsWithReagents: SolutionWithReagents[] = [];
  reagentsForSolution = [];
  solutionsHistoryEntry;

  constructor(private backend: BackendServiceService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getAllMethods();
    this.createInputForm();
    this.checkSetting();
    // this.getFullMethodById();
  }


  getAllMethods() {

    let temporaryMethods;

    this.backend.getMethods().then(element => {
      temporaryMethods = element;
      this.methods = [];
      temporaryMethods.forEach(data => {
        console.log(data);
        this.methods.push(data);
        console.log("data methods", this.methods);

      });
    });

    this.foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

  }

  createInputForm() {
    this.inputForm = this.formBuilder.group({
      methodTitle: ['', [Validators.required]],
      solutionTitle: ['', [Validators.required]],
      solutionCreationDate: ['', [Validators.required]]
      // methodId: ''

    });
  }

  checkSetting() {
    console.log("before if", this.inputForm.get('methodTitle').value);
    if (this.inputForm.get('methodTitle').value !== null) {
      console.log("in if", this.inputForm.get('methodTitle').value);
    }
  }

  setMethod() {
    this.methodTitle = this.inputForm.get('methodTitle').value;
    // this.getFullMethodById();

    // let method = this.inputForm.get('methodTitle').value;
    // console.log("in set", method);
  }

  getFullMethodById() {
    console.log('inside');
    let selectedMethodTitle = this.inputForm.get('methodTitle').value;
    console.log('method title', selectedMethodTitle)
    for (let method1 of this.methods) {
      console.log('one method', method1);
      if (method1.methodTitle === selectedMethodTitle) {
        console.log('method.methodTitle', method1.methodTitle);
        this.selectedMethod = method1;
        console.log('selected method', this.selectedMethod);
        this.id = method1.id;
        console.log('this method id', this.id);
        // this.inputForm.get('methodId').setValue(method1.methodId);
        // console.log('method.id', this.inputForm.get('methodId').value);
        this.backend.getFullMethodById(this.id).then((data: IResponse) => {
          this.solutionsWithReagents = data.solutionWithReagentsList;
          console.log('data', data);
          console.log('solutions with reagents', this.solutionsWithReagents);
          this.solutionsWithReagents.forEach(el => {
            console.log('solution', el.solution);
            console.log('aa');
          });
        });
      }
    }


  }

  setSolutionDetails() {
    this.currentReagents = [];
    this.solution = null;
    console.log('currentReagents', this.currentReagents);
    let selectedSolution = this.inputForm.get('solutionTitle').value;
    for (let solutionWithReagents of this.solutionsWithReagents) {
      if (solutionWithReagents.solution.solutionTitle === selectedSolution) {
        this.solution = solutionWithReagents.solution;
        solutionWithReagents.reagentsList.forEach(data => {
          this.currentReagents.push(data);
          console.log('data', data);
          console.log('current  Reagents', this.currentReagents);
        });
        console.log('solution', this.solution);
        // this.reagentsForSolution = solutionWithReagents.reagentsList;
        // this.reagentsForSolution.forEach(data => {
        //
        // });
        // console.log('reagents list', this.reagentsForSolution);
      }
    }
  }

  setHistoryEntry() {
    // this.solutionsHistoryEntry = undefined;
    if (this.inputForm.valid) {
      console.log('inside valid form');
      console.log('date', this.inputForm.get('solutionCreationDate').value);
      // console.log('should be empty', this.solutionsHistoryEntry.solutionCreationDate);
      // this.solutionsHistoryEntry.solutionCreationDate = this.inputForm.get('solutionCreationDate').value;
      // console.log('should be date', this.solutionsHistoryEntry.solutionCreationDate);
      // console.log(this.solutionsHistoryEntry.solution);
      // this.solutionsHistoryEntry = new SolutionsHistory(this.solution, this.methodTitle, this.currentReagents);
      this.solutionsHistoryEntry = new SolutionsHistory(this.selectedMethod, this.solution, this.currentReagents, this.inputForm.get('solutionCreationDate').value)
      // this.solutionsHistoryEntry.solution(this.solution);
      // this.solutionsHistoryEntry.methodTitle(this.inputForm.get('methodTitle').value);
      // this.solutionsHistoryEntry.reagentsList(this.currentReagents);
      console.log('history entry', this.solutionsHistoryEntry);
    }
  }


  sendToBackEnd() {
    this.setSolutionDetails();
    this.setHistoryEntry();

    this.backend.createNewEntry(this.solutionsHistoryEntry).then(data => {
    console.log('yay', data);
    })
  };


}
