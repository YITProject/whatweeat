import data from "../data/all.json";
import { BaseButton } from 'godown/react';
import { stylobj } from 'powerstyl';
export default function Data() {
  return (
    <div style={stylobj`    
    display: flex;
    flex-direction: column;
    margin: .8em;` }>
      <BaseButton color="green" onClick={
        () => {
          window.open("https://github.com/YITProject/whatweeat/edit/main/src/data/all.json", "_blank");
        }
      }>
        Edit
      </BaseButton>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
