import React from "react";

function HeaderNoteSearch({onSearch}) {
    return(
        <div className="note-search">
            <input type="text" placeholder="Cari catatan ..." onChange={(event) => onSearch(event)} />
        </div>
    )
}

export default HeaderNoteSearch;