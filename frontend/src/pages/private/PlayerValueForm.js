import React, { useState } from "react";
import axios from "axios";
import UserHeader from "components/UserHeader";

const PlayerValueForm = () => {
  const [result, setResult] = useState(null);
  const [position, setPosition] = useState(null);

  const [inputValues, setInputValues] = useState({
    Overall: "0",
    Potential: "0",
    Ball_control: "0",
    Composure: "0",
    Reactions: "0",
    Age: "0",
  });

  const [inputPositions, setInputPositions] = useState({
    Acceleration: "0",
    Crossing: "0",
    Dribbling: "0",
    Finishing: "0",
    Heading_accuracy: "0",
    Long_passing: "0",
    Positioning: "0",
    Sliding_tackle: "0",
    Standing_tackle: "0",
    Vision: "0",
  });

  const positionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/position-quess/",
        inputPositions
      );
      console.log(response); // Sunucu cevabını konsola yazdır
      setPosition(response.data.prediction); // Sonucu state'e yerleştir
    } catch (error) {
      console.error("Error while making API request", error);
    }
  };

  const positionChange = (e) => {
    const { name, value } = e.target;
    setInputPositions({
      ...inputPositions,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/player-value-guess/",
        inputValues
      );
      console.log(response); // Sunucu cevabını konsola yazdır
      setResult(response.data.prediction); // Sonucu state'e yerleştir
    } catch (error) {
      console.error("Error while making API request", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <div className="bg-zinc-100 font-open">
      <div className="flex">
        <UserHeader></UserHeader>

        <div class="w-full max-w-xs ml-28 mt-10 flex-wrap">
          <div className="bg-white p-3 shadow-md border-blue-500 border-2 border-opacity-40 rounded">
            <h1 className="text-3xl font-open text-center">Player Value AI</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            class="bg-white flex flex-wrap border-2 border-t-0 border-blue-500 border-opacity-40 pl-12 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Overall
              </label>
              <input
                class="shadow appearance-none border rounded-lg w-24 py-2 px-3 hover:border-blue-500 focus:border-blue-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Overall"
                value={inputValues.Overall}
                onChange={handleChange}
                placeholder="Overall"
              />
            </div>
            <div class="mb-4 ml-8">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Potential
              </label>
              <input
                class="shadow appearance-none border rounded-lg hover:border-blue-500 focus:border-blue-500 w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Potential"
                value={inputValues.Potential}
                onChange={handleChange}
                placeholder="Potential"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Ball Control
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="BallControl"
                value={inputValues.BallControl}
                onChange={handleChange}
                placeholder="Ball Control"
              />
            </div>
            <div class="mb-4 ml-8">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Composure
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Composure"
                value={inputValues.Composure}
                onChange={handleChange}
                placeholder="Composure"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Reaction
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Reactions"
                value={inputValues.Reactions}
                onChange={handleChange}
                placeholder="Reactions"
              />
            </div>
            <div class="mb-4 ml-8">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Age
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Age"
                value={inputValues.Age}
                onChange={handleChange}
                placeholder="Age"
              />
            </div>

            <div class="flex flex-col mx-auto items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Cost
              </button>
              <h1 className="mt-3 text-gray-700 text-sm font-bold block">
                {result !== null
                  ? `Sonuç: ${parseInt(result)}M`
                  : "M"
                  ? ""
                  : ""}
              </h1>
            </div>
          </form>
        </div>

        <div class="w-full max-w-xs ml-28 mt-10 flex-wrap">
          <div className="bg-white p-3 shadow-md border-blue-500 border-2 border-opacity-40 rounded">
            <h1 className="text-3xl font-open text-center">
              Player Position AI
            </h1>
          </div>
          <form
            onSubmit={positionSubmit}
            class="bg-white flex flex-wrap space-x-2 border-2 border-t-0 text-sm border-blue-500 border-opacity-40 pl-12 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div class="mb-4 ml-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Acceleration
              </label>
              <input
                class="shadow appearance-none border rounded-lg w-24 py-2 px-3 hover:border-blue-500 focus:border-blue-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Acceleration"
                value={inputPositions.Acceleration}
                onChange={positionChange}
                placeholder="Acceleration"
              />
            </div>
            <div class="mb-4 pl-3">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="">
                Crossing
              </label>
              <input
                class="shadow appearance-none border rounded-lg hover:border-blue-500 focus:border-blue-500 w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Crossing"
                value={inputPositions.Crossing}
                onChange={positionChange}
                placeholder="Crossing"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="">
                Dribbling
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Dribbling"
                value={inputPositions.Dribbling}
                onChange={positionChange}
                placeholder="Dribbling"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="finishing"
              >
                Finishing
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Finishing"
                value={inputValues.Finishing}
                onChange={handleChange}
                placeholder="Finishing"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="headingAccuracy"
              >
                Heading Acc.
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="HeadingAccuracy"
                value={inputPositions.HeadingAccuracy}
                onChange={positionChange}
                placeholder="Heading Accuracy"
              />
            </div>
            <div class="mb-4 pl-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="longPassing"
              >
                Long Passing
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="LongPassing"
                value={inputPositions.LongPassing}
                onChange={positionChange}
                placeholder="Long Passing"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="positioning"
              >
                Positioning
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Positioning"
                value={inputPositions.Positioning}
                onChange={positionChange}
                placeholder="Positioning"
              />
            </div>
            <div class="mb-4 pl-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="slidingTackle"
              >
                Sliding T.
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="SlidingTackle"
                value={inputPositions.SlidingTackle}
                onChange={positionChange}
                placeholder="Sliding Tackle"
              />
            </div>
            <div class="mb-4 ml-8">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="standingTackle"
              >
                Standing T.
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="StandingTackle"
                value={inputPositions.StandingTackle}
                onChange={positionChange}
                placeholder="Standing Tackle"
              />
            </div>
            <div class="mb-4 pl-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="vision"
              >
                Vision
              </label>
              <input
                class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="Vision"
                value={inputPositions.Vision}
                onChange={positionChange}
                placeholder="Vision"
              />
            </div>

            <div class="flex flex-col mx-auto items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Cost
              </button>
              <h1 className="mt-3 text-gray-700 text-lg font-bold block">
              {position !== null ? `The Best Position is: ${position === 0 ? "ST" : position === 1 ? "RW" : position === 2 ? "RM" : position === 3 ? "CM" : position === 4 ? "CAM" : position === 5 ? "CF" : position === 6 ? "CDM" : position === 7 ? "CB" : position === 8 ? "LB,RB,RWB,LWB"  : ""}` : ""}
              </h1>
            </div>
          </form>
        </div>

       

      </div>
    </div>
  );
};

export default PlayerValueForm;
