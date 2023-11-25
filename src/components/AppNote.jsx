import React from "react";
import {getInitialData} from "../utils/index";
import CardList from "./CardList";
import HeaderNoteSearch from "./HeaderNoteSearch";
import NoteInput from "./NoteInput";

class AppNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            catatans: getInitialData(),
            search: ''
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onArsipNotesHandler = this.onArsipNotesHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this)
    }

    onDeleteHandler(id) {
        const catatans = this.state.catatans.filter((catatan) => catatan.id !== id);
        this.setState({ catatans });
    }

    onAddNotesHandler({ title, body, createdAt }) {
        this.setState((prevState) => {
            return {
                catatans: [
                    ...prevState.catatans,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt,
                        archived: false,
                    },
                ],
            };
        });
    }

    onArsipNotesHandler(id) {
        this.setState((prevState) => {
            const isArchived = prevState.catatans.map((catatan) =>
                catatan.id === id ? { ...catatan, archived: !catatan.archived } : catatan
            );
            return {
                catatans: isArchived,
                
            };
        });
    }

    onSearchEventHandler(event) {
        const searchValue = event.target.value.toLowerCase();
        this.setState({ search: searchValue });
        event.preventDefault();
      }

    

    render() {
        const { catatans, search } = this.state;

        const searchResult = search
        ? catatans.filter((catatan) => catatan.title.toLowerCase().includes(search))
        : catatans;
    
        const active = searchResult.filter((catatan) => !catatan.archived);
        const archived = searchResult.filter((catatan) => catatan.archived);
    
           return (
            <>
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <HeaderNoteSearch onSearch={this.onSearchEventHandler} />
                </div>
                <div className="note-app__body">
                    <NoteInput addNotes={this.onAddNotesHandler} />
                    <h2>Catatan Aktif</h2>
                    {active.length !== 0 ? (
                        <>
                            <CardList
                            catatans={active}
                            onDelete={this.onDeleteHandler}
                            onArsip={this.onArsipNotesHandler}
                            />
                        </>
                    ) : (
                        <>
                            <p className="notes-list__empty-message">Tidak ada catatan</p>
                        </>
                    )
                    }
                    <h2>Arsip</h2>
                    {archived.length !== 0 ? (
                        <>
                            <CardList
                                catatans={archived}
                                onDelete={this.onDeleteHandler}
                                onArsip={this.onArsipNotesHandler}
                            />
                        </>
                    ) : (
                        <>
                            <p className="notes-list__empty-message">Tidak ada catatan</p>
                        </>
                    )
                    }
                   
                </div>
            </>
        );
    }
}

export default AppNote;
