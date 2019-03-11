import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import * as React from "react";
import * as ReactDom from "react-dom";
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import NewsShare from "./components/NewsShare";
import {INewsShareProps} from "./components/INewsShare";

import * as strings from 'SpoExtensionShareIconApplicationCustomizerStrings';


const LOG_SOURCE: string = 'SpoExtensionShareIconApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpoExtensionShareIconApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpoExtensionShareIconApplicationCustomizer
  extends BaseApplicationCustomizer<ISpoExtensionShareIconApplicationCustomizerProperties> {
    private _topPlaceholder:PlaceholderContent|undefined;
    private _bottomPlaceholder:PlaceholderContent|undefined;

  @override
  public onInit(): Promise<void> {
    //debugger;
    console.log("log_1");
  this.context.placeholderProvider.changedEvent.add(this,this._renderPlaceHolders);
  console.log("log_2");
  //this._renderPlaceHolders();


    return Promise.resolve();
  }

  private _renderPlaceHolders():void{
    //debugger;
    console.log('HelloWorldApplicationCustomizer._renderPlaceHolders()');
    console.log('Available placeholders: ',this.context.placeholderProvider.placeholderNames.map(name => PlaceholderName[name]).join(', '));
    if(!this._topPlaceholder){
      this._topPlaceholder=this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top,{onDispose:this._onDispose});
    }
    if(!this._topPlaceholder){
      console.log("the top placeholder was not found");
    }

    let divelement:HTMLDivElement=document.createElement("div");
    divelement.className="SPFXExtension";
    document.getElementsByClassName("ms-CommandBar-primaryCommand")[0].appendChild(divelement);
    if(divelement){
      const element:React.ReactElement<INewsShareProps>=React.createElement(
        NewsShare,{
          newscontext:this.context,
          pageurl:window.location.href.split('?')[0]
        }
        );
      ReactDom.render(element,divelement);
    }

  }

  private _onDispose(): void {
    console.log(`${LOG_SOURCE} Dispossed`);
  }
}
