import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class GuestsController {
    /**
     * [constructor description]
     * @method  constructor
     * @author jackfiallos
     * @version [version]
     * @date    2017-10-28
     * @param   {HttpClient} publichttp [description]
     * @return  {[type]} [description]
     */
    constructor(public http: HttpClient) {}

    /**
     * [getGuests description]
     * @method  getGuests
     * @author jackfiallos
     * @version [version]
     * @date    2017-10-28
     * @return  {Observable<any>} [description]
     */
    public getGuests(): Observable<any> {
        return this.http.get<any>(environment.api_url + '/customer');
    }

    /**
     * [getGuestById description]
     * @method  getGuestById
     * @author jackfiallos
     * @version [version]
     * @date    2017-10-28
     * @param   {number} guestId [description]
     * @return  {Observable<any>} [description]
     */
    public getGuestById(guestId: number): Observable<any> {
        return this.http.get<any>(environment.api_url + '/customer/' + guestId);
    }

    /**
     * [createGuest description]
     * @method  createGuest
     * @author jackfiallos
     * @version [version]
     * @date    2017-10-28
     * @param   {any} guest [description]
     * @return  {[type]} [description]
     */
    public createGuest(guest: any) {
        return this.http.post(environment.api_url + '/customer/', guest);
    }

    /**
     * [updateGuest description]
     * @method  updateGuest
     * @author jackfiallos
     * @version [version]
     * @date    2017-10-28
     * @param   {number} guestId [description]
     * @param   {any} guest [description]
     * @return  {Observable<any>} [description]
     */
    public updateGuest(guestId: number, guest: any): Observable<any> {
        return this.http.put<any>(environment.api_url + '/customer/' + guestId, guest);
    }
}
