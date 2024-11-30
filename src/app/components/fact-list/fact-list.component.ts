import {Component, OnDestroy, OnInit} from '@angular/core';
import {Fact} from '../../models';
import {FactService} from '../../services/fact.service';
import {Subscription} from 'rxjs';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-fact-list',
  imports: [
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    NgClass
  ],
  templateUrl: './fact-list.component.html',
  styleUrl: './fact-list.component.css',
  standalone: true
})
export class FactListComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();

  facts: Fact[] = [];
  newFact?: Fact;

  constructor(private factService: FactService) {
  }

  ngOnInit(): void {
    this.loadFacts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadFacts(): void {
    this.subscription.add(
      this.factService.getAllFacts().subscribe((facts: Fact[]) =>
        this.facts = facts
      )
    );
  }

  getNewFact(): void {
    this.factService.getNewFact().subscribe((fact: Fact) => {
      this.newFact = fact;
      this.facts.push(fact);
    })
  }
}
