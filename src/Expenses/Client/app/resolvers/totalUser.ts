import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TotalUserService } from '../shared/totalUser.service';
import { IUser } from "../models/ITotalUser";

@Injectable()
export class TotalUserResolve implements Resolve<TotalUserService> {

    constructor(private totalUserService: TotalUserService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.totalUserService.getOne(route.paramMap.get('id'));
    }
}