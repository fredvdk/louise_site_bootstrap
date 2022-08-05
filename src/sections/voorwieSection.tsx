import React from 'react'
import TextSegment from '../textsegment';
import Title from '../title';

export default function VoorWieSection() {
  const voor_wie = "Ik bied individuele therapie aan (jong)volwassenen en ouderen. Enkele thema’s waarvoor u onder meer bij mij terecht kunt zijn: ";
 
  return (
    <>
        <div id='voorWie' className="subheading"></div>
        <Title name="Voor Wie ?" />
        <div className='text'>
        {voor_wie}
        </div>
        <div className='listbox'>
        <ul className='list'>
          <li>
          Ingrijpende gebeurtenissen (overlijden, relatiebreuk, ontslag, …)
          </li>
          <li>
          Spanning en stress
          </li>
          <li>
          Emotionele problemen (eenzaamheid, depressie, zelfmoordgedachten, …)
          </li>
          <li>
          Angstproblemen
          </li>
          <li>
          Automutilatie
          </li>
          <li>
          Problemen rond seksualiteit
          </li>
          <li>
          Burn-out
          </li>
          <li>
          Persoonlijke vraagstukken (Wie ben ik? Wat wil ik bereiken? Hoe moet het verder?)
          </li>
          <li>
          Traumaverwerking 
          </li>
          <li>
          …
          </li>
        </ul>
        </div>
    </>
    

  )
}
