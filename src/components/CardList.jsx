import React from "react";
import CardNoteItem from "./CardNoteItem";

function CardList({ catatans, onDelete, onArsip }) {
  return (
    <div className="notes-list">
      {catatans.map((catatan) => (
        <CardNoteItem
          key={catatan.id}
          {...catatan}
          id={catatan.id}
          onDelete={onDelete}
          onArsip={onArsip}
        />
      ))}
    </div>
  );
}

export default CardList;
