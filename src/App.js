/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
//components
import { Header } from "./components/Header/Header.js";
import { Title } from "./components/Title/Title.js";
import { Playground } from "./components/Playground/Playground.js";
import { Profile } from "./components/Profile/Profile.js";
import { User } from "./components/User/User.js";
import { Choice } from "./components/Choice/Choice.js";
import { Score } from "./components/Score/Score.js";
import { Round } from "./components/Round/Round.js";
import { Message } from "./components/Message/Message.js";
import { Computer } from "./components/Computer/Computer.js";
import { Reset } from "./components/Reset/Reset.js";
import { LanguagesCustomSelect } from "./components/LanguagesCustomSelect/LanguagesCustomSelect.js";
import { ToggleSwitch } from "./components/ToggleSwitch/ToggleSwitch.js";

//contexts
import { LanguageContext } from "./context/LanguageContext/LanguageContext.js";
import { ThemeContext } from "./context/ThemeContext/ThemeContext.js";
import { AnimationContext } from "./context/AnimationContext/AnimationContext.js";
import { GameContext } from "./context/GameContext/GameContext.js";
import { AudioContext } from "./context/AudioContext/AudioContext.js";

//styles
import "./App.css";

function App() {
  //useContext
  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const { animationClass } = useContext(AnimationContext);
  const { game, selectIcon, isSelected, rockIcon, paperIcon, scissorsIcon } =
    useContext(GameContext);
  const { pcScore, userScore } = game;

  return (
    <div className={`App ${theme}`}>
      <div className="animation-layer">
        <div className={animationClass}>
          {userScore < 5 && pcScore < 5 ? (
            <Header>
              <LanguagesCustomSelect />
              <ToggleSwitch
                context={ThemeContext}
                id="toggle-theme"
                labelClass="toggle-switch toggle-theme"
              />
              <ToggleSwitch
                context={AudioContext}
                id="toggle-audio"
                labelClass="toggle-switch toggle-audio"
              />
            </Header>
          ) : null}

          <Title />
          <Round />
          <Playground>
            <Profile>
              <User>
                <Choice
                  onClick={selectIcon}
                  value={texts.rock}
                  choiceIcon={rockIcon}
                  isSelected={isSelected(texts.rock)}
                />
                <Choice
                  onClick={selectIcon}
                  value={texts.paper}
                  choiceIcon={paperIcon}
                  isSelected={isSelected(texts.paper)}
                />
                <Choice
                  onClick={selectIcon}
                  value={texts.scissors}
                  choiceIcon={scissorsIcon}
                  isSelected={isSelected(texts.scissors)}
                />
              </User>
              <Score score={userScore} />
            </Profile>

            <Message />

            <Profile>
              <Computer />
              <Score score={pcScore} />
            </Profile>
            <Reset />
          </Playground>
        </div>
      </div>
    </div>
  );
}

export default App;
