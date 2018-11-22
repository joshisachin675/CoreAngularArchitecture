import { Component, OnInit, Inject } from '@angular/core';
import { ITotalUser } from "../../models/ITotalUser";
import { TotalUserService } from "../../shared/totalUser.service";

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { AlertService } from '../../shared/alert.service';

@Component({
    selector: 'total-userlist',
    templateUrl: './totaluser-list.component.html'
})
export class TotalUserListComponent implements OnInit {
    debugger
    

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private totalUserService: TotalUserService,
        private alertService: AlertService,
        private location: Location) { }

    ngOnInit() {
      //  let data: ITotalUser = this.route.snapshot.data['totalUsers'];

       
    }

    //save() {
    //    let method = this.model.id
    //        ? this.totalUserService.update(this.model)
    //        : this.totalUserService.add(this.model);

    //    return method.subscribe(
    //        data => {
    //            this.location.back();
    //        },
    //        error => {
    //            console.log(error, error.json());
    //            this.alertService.error(error._body);
    //        });
    //}
}
