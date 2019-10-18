import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { JobDetailService } from '../../service/job-detail.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  jobId;
  job;

  constructor(private JobDetailService: JobDetailService) { }

  ngOnInit() {

    let id = 1;

    this.JobDetailService.getRequest(id).subscribe((data: any[])=>{
      this.job = data;
      console.log(data);
    })
  }


}
