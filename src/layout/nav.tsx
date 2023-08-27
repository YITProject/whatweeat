import { NavLayout, SuperAnchor } from 'godown/react';
import { stylobj } from 'powerstyl';
import React from 'react';
import "./nav.css";
import { baseURL } from '../config';
export default function Nav(props: { children: React.ReactElement; }) {
  return (
    <NavLayout>
      <div slot="host" style={stylobj`
    font-size: 20px;` }>
        {
          window.location.pathname !== `${baseURL}/` ? <SuperAnchor onClick={() => { window.history.back(); }}>
            Back
          </SuperAnchor> : <SuperAnchor href={`${baseURL}}/about`}>
            About
          </SuperAnchor>
        }
      </div>
      <div slot="opt" style={stylobj`
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 20px;` }>
        <SuperAnchor href={`${baseURL}/data`} arrow="delta">
          Data
        </SuperAnchor>
      </div>
      <main>
        {props.children}
      </main>
    </NavLayout>
  );
}
