import React, { Component } from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'

import ResumeItem from './ResumeItem/ResumeItem'

const ResumeContainer = styled.div`
`

const SectionTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  line-height: 42px;
  font-family: Roboto Mono,monospace;
  font-weight: normal;
`

const SectionSubTitle = styled.h2`
  font-family: Roboto Mono,monospace;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 700;
  color: #999;
  margin-bottom: 40px;
`

const ResumeList = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  padding: 0 15px;
`



export default class Resume extends Component {
  render() {
    const experiencesPro = [
      {
        title: 'Scrum Master / Chef de projet',
        company: 'Ansamb',
        date: 'sept2016 - janv2018',
        description: [
          'Organisation et animation des réunions des équipes de développement',
          'Amélioration des processus liés à la méthodologie Scrum',
          'Accompagnement de l’équipe produit dans l’écriture et la mise a jour des backlogs',
          'Cadrage des sprints et cycle de développement (organisation, estimation de charge, planning)'
        ],
        logo: 'ansamb.jpg',
        link: 'https://www.joinplaces.com/',
      },

      {
        title: 'Ingénieur Application',
        company: 'Ansamb',
        date: 'oct2014 - sept2016',
        description: [
          'Développement de Places, suite de logiciels donnant aux utilisateurs le contrôle complet de leurs données tout en protégeant leur vie privée (échanges de fichiers, chat, vidéo conférence, ...)',
        ],
        logo: 'ansamb.jpg',
        link: 'https://www.joinplaces.com/',
        tags: ['Symfony', 'PHP', 'Javascript', 'AngularJs', 'Ionic'],
      },

      {
        title: 'Développeur Indépendant',
        company: 'FlashMVP',
        date: 'nov2013 - dec2014',
        description: [
          'Conception d’application web & mobile',
        ],
        logo: 'flashmvp.jpg',
        link: 'https://flashmvp.net/',
        tags: ['Symfony', 'PHP', 'Javascript', 'AngularJs', 'Ionic'],
      },

      {
        title: 'Responsable des systèmes d’information',
        company: 'SPL RMR',
        date: 'fév2014 - aout2014',
        description: [
          'Pilotage du système d’information',
          'Sélection, contrôle et suivi des prestataires',
          'Réalisation du site web'
        ],
        logo: 'SPLRMR.jpg',
        link: 'http://museesreunion.re/',
        tags: ['PHP', 'Drupal'],
      },
      {
        title: 'Ingénieur Recherche et Développement',
        company: 'RDTRONIC',
        date: 'jui2012 - mai 2013',
        description: [
          'Développement sur système embarqués',
          'Développement récupération de données depuis système embarqué et géolocalisé',
          'Conception d’une solution d’authentification centralisée sur un parc hétérogène'
        ],
        logo: 'rdtronic.jpg',
        link: 'http://www.rdtronic.com',
        tags: ['Java', 'Linux'],
      },
      {
        title: 'Ingénieur Sécurité Stagiaire',
        company: 'MONEXT',
        date: 'mai2011 - oct2011',
        description: [
          'Développement d’une plateforme de gestion des éléments cryptographiques',
          'Encadrement de l’audit PCI-DSS et des tests d’intrusion',
        ],
        logo: 'monext.jpg',
        link: 'https://www.monext.eu',
        tags: ['PHP', 'Python'],
      },
    ];
    return (
      <ResumeContainer id="resume">
        <SectionTitle>Mon parcours professionnel</SectionTitle>
        <ResumeList>
          <SectionSubTitle>Work Experience</SectionSubTitle>
          {experiencesPro.map(experience => <ResumeItem title={experience.title}
            company={experience.company} date={experience.date} description={experience.description} logo={experience.logo} link={experience.link} tags={experience.tags} />)}
        </ResumeList>
        <ResumeList>
          <SectionSubTitle>Education</SectionSubTitle>
          <ResumeItem
            title="Master professionnel Informatique, Informatique Avancée et Applications (I2A)"
            company="Université d'Aix - Marseille"
            date="2009 - 2011"
            logo="universityaixmarseille.jpg"
            link="https://www.univ-amu.fr/"
          />
          <ResumeItem
            title="Licence Informatique Science et technologie de l’information"
            company="Université de la Réunion"
            date="2006 - 2009"
            logo="universityreunion.jpg"
            link="http://www.univ-reunion.fr/"
          />
        </ResumeList>
        <ResumeList>
          <SectionSubTitle>Volunteering</SectionSubTitle>
          <ResumeItem
            title="Bénévole"
            company="Association Webcup"
            date="Fév 2018"
            logo="webcup.jpg"
            link="http://www.webcup.fr/"
          />
          <ResumeItem
            title="Startup Technical Coach"
            company="Startup Weekend"
            date="Fév 2018"
            logo="startupweekend.jpg"
            link="https://startupweekend.org/"
          />
        </ResumeList>
      </ResumeContainer>
    )
  }
};

