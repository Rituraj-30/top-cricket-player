import React from "react";

const PlayerModal = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-red-500"
        >
          ✕
        </button>

        {/* Player Info */}
        <div className="flex flex-col items-center">
          <img
            src={player.image}
            alt={player.name}
            className="w-50 h-50 object-cover rounded-full border-4 border-blue-500"
          />
          <h2 className="mt-3 text-xl font-bold">{player.name}</h2>
          <p className="text-gray-600">{player.country} • {player.role}</p>
          <p className="mt-2 text-center text-sm">{player.description}</p>
        </div>

        {/* Stats Section */}
        <div className="mt-4">
          <h3 className="font-semibold text-lg text-blue-600">Career Stats</h3>
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            {player.role === "Batsman" && (
              <>
                <li>ODI Runs: {player.stats.odiRuns}</li>
                <li>T20 Runs: {player.stats.t20Runs}</li>
                <li>Test Runs: {player.stats.testRuns}</li>
                <li>Centuries: {player.stats.centuries}</li>
              </>
            )}
            {player.role === "Bowler" && (
              <>
                <li>ODI Wickets: {player.stats.odiWickets}</li>
                <li>T20 Wickets: {player.stats.t20Wickets}</li>
                <li>Test Wickets: {player.stats.testWickets}</li>
                <li>Best Bowling: {player.stats.bestBowling}</li>
              </>
            )}
            {player.role === "All-Rounder" && (
              <>
                <li>ODI Runs: {player.stats.odiRuns}</li>
                <li>T20 Runs: {player.stats.t20Runs}</li>
                <li>Test Runs: {player.stats.testRuns}</li>
                <li>ODI Wickets: {player.stats.odiWickets}</li>
                <li>T20 Wickets: {player.stats.t20Wickets}</li>
                <li>Test Wickets: {player.stats.testWickets}</li>
              </>
            )}
            {player.role === "Wicket-Keeper" && (
              <>
                <li>ODI Runs: {player.stats.odiRuns}</li>
                <li>T20 Runs: {player.stats.t20Runs}</li>
                <li>Test Runs: {player.stats.testRuns}</li>
                <li>Dismissals: {player.stats.dismissals}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
