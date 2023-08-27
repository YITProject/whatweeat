import { SuperAnchor } from 'godown/react';
import { tagged } from 'powerstyl';
const SP = tagged`span``margin:.25em;`;
export default function About() {
  return (
    <div>
      <SuperAnchor arrow="delta">
        &copy;{new Date().getFullYear()}
        <SP />
        <a href="//github.com/startracex/">STARTRACEX</a>
        <SP />
        <a href="//github.com/YITProject">YITProject</a>
      </SuperAnchor>
    </div>
  );
}
