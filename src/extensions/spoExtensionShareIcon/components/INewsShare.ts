import ApplicationCustomizerContext from "@microsoft/sp-application-base/lib/extensibility/ApplicationCustomizerContext";

export interface INewsShareProps{
    newscontext:any;
    pageurl:string;
}

export interface INewsShareState{
    show:boolean;
    postcontent:string;
}