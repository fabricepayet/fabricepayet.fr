import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import ResumeItem from '../components/ResumeItem/ResumeItem'

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 1140px;
  padding: 0px 1.0875rem 1.45rem;
`

const ResumeContainer = styled.div`
`

const SectionTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  line-height: 42px;
  font-family: Roboto Mono,monospace;
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

const ResumePage = () => (
  <InnerContainer>
    {/* <p>Mon parcours professionnel et mes formations</p> */}
    <ResumeContainer>
      <SectionTitle>Resume</SectionTitle>
      <ResumeList>
        <SectionSubTitle>Work Experience</SectionSubTitle>
          <ResumeItem
            title="Scrum Master / Chef de projet"
            company="Ansamb"
            date="sept2016 - janv2018"
            description="Organisation et animation des réunions des équipes de développement
            Amélioration des processus liés à la méthodologie Scrum
            Accompagnement de l’équipe produit dans l’écriture et la mise a jour des backlogs
            Cadrage des sprints et cycle de développement (organisation, estimation de charge, planning)
            "
            logo="ansamb.jpg"
            companyLink="https://www.joinplaces.com/"
          />
          <ResumeItem
            title="Ingénieur Application"
            company="Ansamb"
            date="oct2014 - sept2016"
            description="Développement du logiciel Places"
            logo="ansamb.jpg"
            technologies="Coffeescript, MeteorJs, NodeJs"
            companyLink="https://www.joinplaces.com/"
          />
          <ResumeItem
            title="Développeur Indépendant"
            company="FlashMVP"
            date="nov2013 - dec2014"
            description="Conception d’application web & mobile"
            logo="flashmvp.jpg"
            technologies="Symfony, PHP, Javascript, AngularJs, Ionic"
            companyLink="https://flashmvp.net/"
          />
          <ResumeItem
            title="Responsable des systèmes d’information"
            company="SPL RMR"
            date="fév2014 - aout2014"
            description="Pilotage du système d’information
            Sélection, contrôle et suivi des prestataires
            Refonte du site web
            "
            logo="SPLRMR.jpg"
            technologies="PHP, Drupal"
            companyLink="http://museesreunion.re/"
          />
          <ResumeItem
            title="Ingénieur Recherche et Développement"
            company="RDTRONIC"
            date="jui2012 - mai 2013"
            description="Développement sur système embarqués
            Développement d’un protocole de communication pour la récupération de données
            Conception d’une solution d’authentification centralisée sur un parc hétérogène"
            logo="rdtronic.jpg"
            technologies="Java, Linux"
            companyLink="http://www.rdtronic.com"
          />
          <ResumeItem
            title="Ingénieur Sécurité Stagiaire"
            company="MONEXT"
            date="mai2011 - oct2011"
            description="Développement d’une plateforme de gestion des éléments cryptographiques
            Encadrement de l’audit PCI-DSS et des tests d’intrusion"
            logo="monext.jpg"
            technologies="PHP, Python"
            companyLink="https://www.monext.eu/"
          />
      </ResumeList>
      <ResumeList>
        <SectionSubTitle>Education</SectionSubTitle>
          <ResumeItem
            title="Master professionnel Informatique, Informatique Avancée et Applications (I2A)"
            company="Université d'Aix - Marseille"
            date="2009 - 2011"
            logo="universityaixmarseille.jpg"
            companyLink="https://www.univ-amu.fr/"
          />
          <ResumeItem
            title="Licence Informatique Science et technologie de l’information"
            company="Université de la Réunion"
            date="2006 - 2009"
            logo="universityreunion.jpg"
            companyLink="http://www.univ-reunion.fr/"
          />
      </ResumeList>
      <ResumeList>
        <SectionSubTitle>Volunteering</SectionSubTitle>
          <ResumeItem
            title="Bénévole"
            company="Association Webcup"
            date="Fév 2018"
            logo="webcup.jpg"
            companyLink="http://www.webcup.fr/"
          />
          <ResumeItem
            title="Startup Technical Coach"
            company="Startup Weekend"
            date="Fév 2018"
            logo="startupweekend.jpg"
            companyLink="https://startupweekend.org/"
          />
      </ResumeList>
    </ResumeContainer>
  </InnerContainer>
)

export default ResumePage
