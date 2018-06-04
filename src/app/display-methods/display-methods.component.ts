import {Component, OnInit} from '@angular/core';
import {BackendServiceService} from "../backend-service/backend-service.service";
import {Method} from "../models/method";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  methodTitle;
  solution: Solution;
  id: string;
  currentReagents: Reagent[] = [];
  inputForm: FormGroup;
  solutionsWithReagents: SolutionWithReagents[] = [];
  solutionsHistoryEntry;

  constructor(private backend: BackendServiceService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getAllMethods();
    this.createInputForm();
    this.checkSetting();

  }


  getAllMethods() {

    let temporaryMethods;

    this.backend.getMethods().then(element => {
      temporaryMethods = element;
      this.methods = [];
      temporaryMethods.forEach(data => {
        console.log(data);
        this.methods.push(data);
      });
    });


  }

  createInputForm() {
    this.inputForm = this.formBuilder.group({
      methodTitle: ['', [Validators.required]],
      solutionTitle: ['', [Validators.required]],
      solutionCreationDate: ['', [Validators.required]]

    });
  }

  checkSetting() {
    if (this.inputForm.get('methodTitle').value !== null) {
    }
  }


  getFullMethodById() {
    let selectedMethodTitle = this.inputForm.get('methodTitle').value;
    for (let method1 of this.methods) {
      if (method1.methodTitle === selectedMethodTitle) {
        this.selectedMethod = method1;
        this.id = method1.id;
        this.backend.getFullMethodById(this.id).then((data: IResponse) => {
          this.solutionsWithReagents = data.solutionWithReagentsList;
        });
      }
    }

  }

  setSolutionDetails() {
    this.currentReagents = [];
    this.solution = null;
    let selectedSolution = this.inputForm.get('solutionTitle').value;
    for (let solutionWithReagents of this.solutionsWithReagents) {
      if (solutionWithReagents.solution.solutionTitle === selectedSolution) {
        this.solution = solutionWithReagents.solution;
        solutionWithReagents.reagentsList.forEach(data => {
          this.currentReagents.push(data);
        });

      }
    }
  }

  setHistoryEntry() {
    if (this.inputForm.valid) {
      this.solutionsHistoryEntry = new SolutionsHistory(this.selectedMethod, this.solution, this.currentReagents, this.inputForm.get('solutionCreationDate').value);
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
