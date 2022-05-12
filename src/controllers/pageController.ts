import { Request, Response } from "express";
import {createMenuOptions} from "../helpers/createMenuOptions";
import { Pet } from "../models/Pet";

export const home  = (req:Request, res:Response)=>{
    let list = Pet.getAll();

    res.render('pages/page',{
        banner:{
            menu:createMenuOptions('all'),  
            title: 'Todos os animais',
            background: 'allanimals.jpg'    
        }, list
    });
}
export const dogs  = (req:Request, res:Response)=>{
    let list = Pet.getFromType('dog');
    res.render('pages/page',{
        banner:{
            menu:createMenuOptions('dog'),
            title: 'Cachorros',
            background: 'banner_dog.jpg'    
        },
        list
    });
}
export const cats  = (req:Request, res:Response)=>{
    let list = Pet.getFromType('cat');
    res.render('pages/page',{ 
        banner:{
            menu:createMenuOptions('cat'),
            title: 'Gatos',
            background: 'banner_cat.jpg'    
        },
        list
    });
}
export const fishes  = (req:Request, res:Response)=>{
    let list = Pet.getFromType('fish');
    res.render('pages/page',{ 
        banner:{
            menu:createMenuOptions('fish'),
            title: 'Peixes',
            background: 'banner_fish.jpg'    
        },
        list
    });
}