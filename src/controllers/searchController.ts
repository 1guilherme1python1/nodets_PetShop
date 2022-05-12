import { Request, Response } from "express";
import { createMenuOptions } from "../helpers/createMenuOptions";
import { Pet } from "../models/Pet";

export const search  = (req:Request, res:Response)=>{
    let query:string = req.query.q as string;
    if(!query){
        res.redirect('/');
        return;
    }
    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuOptions(''),
        list,
        query
    });
}