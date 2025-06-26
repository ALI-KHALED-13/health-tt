import { useState } from 'react'
import { reactLogo } from './assets/images'
import { SmileyAngryIcon, SmileyIcon, SmileyMehIcon, SmileySadIcon, SmileyWinkIcon } from './assets//icons'
import viteLogo from '/vite.svg'
import GlobalStyles, { colors } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'
import RadioInput from './components/RadioInput'
import { TextInput } from './components/TextInput'
import { useAsyncFunc } from './hooks/useAsync'
import Button from './components/Button'
import { checkinDailyHealth } from './services'
import SliderInput from './components/SliderInput'

const energyLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(val=> ({value: val + '', display: val + 1}))

const moods = [
  {value: "upset", display: <><SmileyAngryIcon size={32} weight='fill' color={colors.lightRed}/> Upset</>},
  {value: 'down', display: <><SmileySadIcon size={32} weight='fill' color={colors.gray}/> Sad</>},
  {value: "normal", display: <><SmileyMehIcon size={32} weight='fill' color={colors.orange}/> Normal</>},
  {value: 'good', display: <><SmileyIcon size={32} weight='fill' color={colors.deepGreen}/> Good</>},
  {value: "happy", display: <><SmileyWinkIcon size={32} weight='fill' color={colors.seafoamGreen}/> Happy</>},
];



function App() {
  const [chosenMood, setChosenMood] = useState<IOption>();
  const [notes, setNotes] = useState('');
  const [energy, setEnergy ] = useState<IOption>();

  const [checkin, {isLoading, error, data}] = useAsyncFunc(checkinDailyHealth)

  const handleSubmit =(evt: React.FormEvent<HTMLFormElement>)=> {
    evt.preventDefault();
    if (!chosenMood || energy === undefined){
      return alert(`Please set your ${energy? 'mood': 'energy'}`)
    }
    checkin({
      mood: chosenMood.value as "upset" | "down" | "normal" | "good" | "happy",
      energy: +energy.value,
      notes
    })
  }

  return (
    <ThemeProvider theme={colors}>
    <GlobalStyles/>
    <main>
      <header>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo}  alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo}  alt="React logo" />
        </a>
        <h1>Daily Health Check</h1>
      </header>

      {error && <p style={{color: colors.lightRed}}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>How is your mood today?</legend>
          <ul>
            {moods.map(moodOp=> (
              <RadioInput
                value={chosenMood}
                option={moodOp}
                onClick={(clickedMood)=> setChosenMood(clickedMood)}
              />
            ))}
          </ul>
        </fieldset>
        <fieldset>
          <legend>Set your energy level</legend>
          <SliderInput
            steps={energyLevels}
            value={energy}
            onChange={(selectedStep)=> setEnergy(selectedStep)}
          />
        </fieldset>
        <TextInput
          value={notes}
          onChange={(evt)=> setNotes(evt.target.value)}
          label='Notes to Add'
        />
        <Button color='blue' disabled={isLoading || !chosenMood || energy === undefined} type='submit' style={{marginLeft:'auto'}}>
          Check In
        </Button>
      </form>
      
      {data && (
        <p style={{color: colors.seafoamGreen, fontSize: '1.8rem'}}>
          {data.suggesstions.join(". ")}
        </p>
      )}
    </main>

    </ThemeProvider>
  )
}

export default App
