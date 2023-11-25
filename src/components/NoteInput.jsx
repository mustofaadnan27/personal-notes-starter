import React from "react";
import {showFormattedDate} from '../utils/index';

class NoteInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            createdAt:new Date().toISOString(),
            max:50,
          
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;
    
        const max = 50 - title.length;
        if(max == -1) {
            deleteAtribute = onChange;
        }
        this.setState(() => {
            return {
                title,
                max,
            }
        
        });
      }

    onNoteChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        this.props.addNotes(this.state);
    }


    render() {
        return(
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa Karakter {this.state.max}</p>
                    <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu disini ..." value={this.state.body} onChange={this.onNoteChangeEventHandler} ></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;