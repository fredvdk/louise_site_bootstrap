import React from 'react'
import Title from './title';
import TextSegment from './textsegment';
import ReservationForm from './reservationFrom';
import Hero from './hero';
import { Nav } from 'react-bootstrap';
import Navbar from './nav';

const overMij = "In juni 2020 behaalde ik mijn masterdiploma in de klinische psychologie aan de UGent en liep ik een jaar stage binnen de zorgequipe in de gevangenis van Brugge. Tijdens mijn stage deed ik ervaring op in de behandeling van geïnterneerden met verschillende psychische problematieken zoals verslaving, depressie, persoonlijkheidsproblemen, ... \n Intussen werk ik enkele jaren als zelfstandig psycholoog bij paramedische groepspraktijk Clavis in Torhout (sinds 2020) en psychologenpraktijk PsyBrugge te Brugge (2021). Hier woon ik zeer regelmatig inter- en supervisiemomenten bij om mezelf als therapeut te evalueren. \n Omdat ik het belangrijk vind met de nodige expertise in het werkveld te staan, startte ik in 2021 de vierjarige therapieopleiding in de interactionele vormgeving (Educatieve Academie Antwerpen). Interactionele vormgeving is een nieuwe therapievorm waarbij verschillende therapeutische stromingen geïntegreerd worden tot een nieuw therapeutisch model. Op die manier wordt het mogelijk therapie op maat te bieden en vanuit de hulpvraag van de cliënt te werken. \n Psychologie is bovendien niet alleen mijn beroep, maar ook mijn passie. Ik blijf mezelf dan ook regelmatig bijscholen door het volgen van vormingen, webinairs en het inlezen over verschillende psychologische thema’s. Hiernaast vind ik het ook belangrijk aandacht te hebben voor zelfzorg en mijn eigen persoonlijke groei."

const therapie_visie = "Doorheen ons leven botsen we vaak op uitdagingen of moeilijkheden die ons dagelijks leven op verschillende domeinen (familiaal, relationeel, professioneel, lichamelijk, …) sterk kunnen beïnvloeden. Soms gebeurt het dat we de weg kwijt geraken of het gevoel hebben vast komen te zitten. Op zo’n momenten kan psychologische ondersteuning nodig of wenselijk zijn. Als therapeut hecht ik enorm veel waarde aan de mens achter de problematiek. Geen enkel verhaal is hetzelfde, daarom is therapie op maat van de cliënt voor mij enorm belangrijk. Therapie betekent voor mij samen op avontuur gaan, uit te zoeken wat jij op dit moment nodig hebt. Hierbij is de cliënt de expert van zichzelf, en de therapeut de expert van het proces. De ‘klik’ tussen cliënt en therapeut is hierbij van essentieel belang! Ik werk vanuit het kader van de interactionele vormgeving. Deze therapievorm gaat uit van een nieuw model waarbij verschillende therapeutische stromingen (psychosynthese, Gestalttherapie, systeemdenken, contextuele therapie, cliëntgerichte, …) met elkaar in interactie treden. Deze visie ondersteunt het werken vanuit de uniciteit en hulpvraag van iedere cliënt."

const tarieven = "Ik bied individuele therapie aan (jong)volwassenen en ouderen. \n Enkele thema’s waarvoor u onder meer bij mij terecht kunt zijn: \n - Ingrijpende gebeurtenissen (overlijden, relatiebreuk, ontslag, …) \n -	Spanning en stress \n -	Emotionele problemen (eenzaamheid, depressie, zelfmoordgedachten, …) \n -	Angstproblemen \n -	Automutilatie \n - Problemen rond seksualiteit \n -	Burn-out \n - Persoonlijke vraagstukken (Wie ben ik? Wat wil ik bereiken? Hoe moet het verder?) \n - Traumaverwerking \n - …";

const voor_wie = "";

function MainPage(){
    return(
        <>
        <Hero />
        <div id="overMij" className="subheading"></div>
        <Title name="Over Mij" />
        <TextSegment text={overMij} image="" imgleft/>

        <div id='therapie' className="subheading"></div>
        <Title name="Therapie en visie" />
        <TextSegment text={therapie_visie} image="" imgleft/>    

        <div id='voorWie' className="subheading"></div>
        <Title name="Voor Wie ?" />
        <TextSegment text={voor_wie} image="" imgleft={false}/>    

        <div id='tarieven' className="subheading"></div>
        <Title name="Tarieven" />
        <TextSegment text={tarieven} image="" imgleft={false}/>
        
        </>
    );

}

export default MainPage;