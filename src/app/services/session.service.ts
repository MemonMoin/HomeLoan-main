import { Injectable } from '@angular/core';

import { SessionStorageModel } from '../class/session-storage-model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

   sessionStorageModel : SessionStorageModel = new SessionStorageModel(); 

	public set(key:string,value:string){
	
		this.sessionStorageModel[key]=value;

	}

	get(key:string):string{

		
		return this.sessionStorageModel[key];
		

	}

	remove(key:string){

		this.sessionStorageModel[key]=null;
	}

	clear(){

		this.sessionStorageModel=new SessionStorageModel();

	}
}
