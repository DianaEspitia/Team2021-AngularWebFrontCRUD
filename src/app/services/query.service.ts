import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Clientmodel} from './clientmodel';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  selectclients: Clientmodel;
  client: Clientmodel[];

  readonly URL_API_CREATE_TRANSACTION = 'http://apicrudformongo-workshopdemo.openshift311-ea9753cca330b7f05a99ad5b2c8b5da1-0001.us-east.containers.appdomain.cloud/api/customers';
  readonly URL_API_GET_TRANSACTIONS = 'http://apicrudformongo-workshopdemo.openshift311-ea9753cca330b7f05a99ad5b2c8b5da1-0001.us-east.containers.appdomain.cloud/api/customers';
  readonly URL_API_DELETE = 'http://apicrudformongo-workshopdemo.openshift311-ea9753cca330b7f05a99ad5b2c8b5da1-0001.us-east.containers.appdomain.cloud/api/customers/';

  constructor(public httpClient: HttpClient)
  {
    this.selectclients = new Clientmodel();
  }

  public getClient()
  {
    return this.httpClient.get(this.URL_API_GET_TRANSACTIONS);
  }

  public createTransaction(form)
  {
    return this.httpClient.post( this.URL_API_CREATE_TRANSACTION, form);
  }

  public deleteTransaction(id)
  {
    return this.httpClient.delete(this.URL_API_DELETE + id );
  }

}
