import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { STORAGE_KEY } from "../config/storage_keys.config";

@Injectable()
export class StorageService{

    getLocalUser() : LocalUser{
        let usr = localStorage.getItem(STORAGE_KEY.localUser);
        if(usr == null){
            return null;
        }else{
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj : LocalUser){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEY.localUser);
        }else{
            localStorage.setItem(STORAGE_KEY.localUser, JSON.stringify(obj));
        }
    }
}