import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CandidateData, DataService } from 'src/app/_services/data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/_services/search.service';
import { Subscription } from 'rxjs';


const ALL = "";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit, AfterViewInit {

  displayedColumns = ['cin', 'firstName', 'lastName', 'email', 'phoneNumber', 'expDuration', 'profile', 'status'];
  dataSource: MatTableDataSource<CandidateData>;
  selection: SelectionModel<CandidateData>;
  subscription: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private readonly dataService: DataService, private router: Router, private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.onQueryReceived(this.performSearch.bind(this));

    this.dataService.getParam().subscribe(param =>
      this.dataService.getCandidatesBy(param).subscribe(
        data => {
          this.fillTable(data);
        },
        err => {
          //this.errorMessage = err.error.message;
          //this.isSignUpFailed = true;
          console.log("error");
        }
      ));
  }

  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  performSearch(query: string) {
    this.searchService.search(query).subscribe(
      data => {
        this.fillTable(data);
      },
      err => {
        //this.errorMessage = err.error.message;
        //this.isSignUpFailed = true;
        console.log("error");
      }
    );
  }
  fillTable(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.selection = new SelectionModel<CandidateData>(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onAddCandidate() {
    this.router.navigate(['/addcandidate']);
  }
}
