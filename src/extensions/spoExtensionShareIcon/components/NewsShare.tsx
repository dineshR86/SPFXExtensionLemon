import * as React from 'react';
import { INewsShareState, INewsShareProps } from './INewsShare';
import {
    PrimaryButton,
    DialogFooter,
    Dialog, DialogType, DefaultButton
} from 'office-ui-fabric-react';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import {TextField} from 'office-ui-fabric-react/lib/TextField';
import style from './newsshare.module.scss';
const logo = require('../../../../images/logo.png');

export default class NewsShare extends React.Component<INewsShareProps, INewsShareState> {

    private _labelId: string = getId('dialogLabel');
    private _subTextId: string = getId('subTextLabel');
    constructor(props: INewsShareProps) {
        super(props);
        this.state = {
            show: true,
            postcontent:"this is a news post "+ this.props.pageurl
        };
    }

    public render(): any {
        //debugger;
        return (
            <div className={style.newsshareextn}>
                <div>
                    <DefaultButton onClick={this._showDialog}>
                        <img src={String(logo)} style={{ width: 16, height: 16 }} />
                        <span>Workplace</span>
                    </DefaultButton>
                </div>
                <Dialog
                    hidden={this.state.show}
                    onDismiss={this._closeDialog}
                    dialogContentProps={{
                        type: DialogType.largeHeader,
                        title: 'Post to Workplace',
                        subText: 'For sharing the news article to the Facebook workplace'
                    }}
                    modalProps={{
                        titleAriaId: this._labelId,
                        subtitleAriaId: this._subTextId,
                        isBlocking: false,
                        containerClassName: 'ms-dialogMainOverride'
                    }}
                >
                <TextField label="Content" multiline rows={5} value={this.state.postcontent} disabled={true}/>
                    <DialogFooter>
                        <PrimaryButton onClick={this._saveDialog} text="Post" />
                        <DefaultButton onClick={this._closeDialog} text="Cancel" />
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }

    private _showDialog = (): void => {
        this.setState({ show: false });
    }

    private _closeDialog = (): void => {
        this.setState({ show: true });
    }

    private _saveDialog=():void =>{
        console.log(this.state.postcontent);
        this.setState({show:true});
    }
}