import Card from "./Card";
import React, { useState } from "react";
import PlayerModal from "./PlayerModal";

const Cards = (props) => {
  let category = props.category;
  const [likedPlayers, setLikedPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  function getPlayers() {
    if (!props.courses) return [];
    if (category === "All") {
      let allPlayers = [];
      Object.values(props.courses).forEach((array) => {
        array.forEach((player) => allPlayers.push(player));
      });
      return allPlayers;
    } else {
      return props.courses[category] || [];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getPlayers().map((player) => (
        <Card
          course={player}
          key={player.id}
          likedCourses={likedPlayers}
          setLikedCourses={setLikedPlayers}
          onSelect={() => setSelectedPlayer(player)}
        />
      ))}

      {/* Modal */}
      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
};

export default Cards;
