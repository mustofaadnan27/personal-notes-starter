import React from "react";
import CardNoteItemContent from "./CardNoteItemContent";
import CardNoteItemButton from "./CardNoteItemButton";

function CardNoteItem({title, createdAt, body, id, onDelete, onArsip, archived}) {
    return(
        <div className="note-item">
            <CardNoteItemContent title={title} archived={archived} id={id} createdAt={createdAt} body={body} />
            <CardNoteItemButton id={id} button={archived ? "Pindahkan" : "Arsipkan"} onDelete={onDelete} onArsip={onArsip} />
        </div>
    )
}

export default CardNoteItem;