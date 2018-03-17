import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import ResumeItem from '../components/ResumeItem/ResumeItem'

const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const ResumeContainer = styled.div`
  h2 {
    border-bottom: 4px solid #d8d8d8;
    padding-bottom: 0.2rem;
  }
`

const ResumePage = () => (
  <InnerContainer>
    <ResumeContainer>
      <div>
        <h2>Work Experience</h2>
        <div>
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
            company="SPLRMR"
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
            Conception d’une solution d’authentification centralisée sur un parc hétérogène            
            "
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
        </div>
      </div>
      <div>
        <h2>Education</h2>
        <div>
          <ResumeItem
            title="Master professionnel Informatique, informatique avancée et applications"
            company="Université de provence"
            date="2009 - 2011"
            logo="universityprovence.jpg"
            companyLink="https://www.univ-amu.fr/"
          />
          <ResumeItem
            title="Licence Informatique Science et technologie de l’information"
            company="Université de la Réunion"
            date="2006 - 2009"
            logo="universityreunion.jpg"
            companyLink="http://www.univ-reunion.fr/"
          />
        </div>
      </div>
      <div>
        <h2>Volunteering</h2>
        <div>
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
        </div>
      </div>
    </ResumeContainer>
  </InnerContainer>
)

export default ResumePage
