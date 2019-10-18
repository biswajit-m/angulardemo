import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { JobService } from '../../service/job.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  constructor(private jobService: JobService) { }

  jobs;

  ngOnInit() {

    this.jobService.getRequest().subscribe((data: any[])=>{
      this.jobs = data;
      console.log(data);
    })
  }

}
