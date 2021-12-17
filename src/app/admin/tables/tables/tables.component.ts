import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CandidateData, DataService } from 'src/app/_services/data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/_services/search.service';
import { Subscription } from 'rxjs';
import { CandidateService } from 'src/app/_services/candidate.service';

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
  requiredFileType: string = "text/csv";


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private readonly dataService: DataService,private candidataService: CandidateService, private router: Router, private searchService: SearchService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.searchService.onQueryReceived(this.performSearch.bind(this));
      this.dataService.getCandidates().subscribe(
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
    this.dataService.param="";
  }
  onAddCandidate() {
    this.router.navigate(['/addcandidate']);
  }
  onFileSelected(event) {
    const file: File = event.target.files[0];
    console.log(file);

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      this.dataService.uploadCsv(formData).subscribe(
        data => {
          console.log(JSON.stringify(data));
          this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => {
            this.router.navigate(['tables']);
        });
        },
        err => {
          //this.errorMessage = err.error.message;
          //this.isSignUpFailed = true;
          console.log(err);
        }
      );
    }
  }
  reloadPage(): void {
    window.location.reload();
  }


  ChangeStatusToAccepted(RowId:number){
    this.candidataService.UpdateStatusOfCandidate(RowId,"ACCEPTED").subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("error");
      }
    );
  }

  ChangeStatusToCurrent(RowId:number){
    this.candidataService.UpdateStatusOfCandidate(RowId,"CURRENT").subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("error");
      }
    );
  }

  ChangeStatusToRejected(RowId:number){
    this.candidataService.UpdateStatusOfCandidate(RowId,"REJECTED").subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("error");
      }
    );
  }

}
