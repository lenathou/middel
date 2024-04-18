/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <TooltipProvider>
      <div className="about-page-container">
        <section className="hero-section">
          <h1 className="text-4xl font-bold text-center mt-4 mb-6">À Propos de votre Coiffeur/Barbier</h1>
        </section>
        <div className="firlst-line grid grid-cols-1 md:grid-cols-2 md:gap-12">
        <section className="history-section my-6">
          <Card>
            <CardContent>
              <CardTitle>Mon Histoire</CardTitle>
              <CardDescription>
                Je m'appelle Yannick MIDELTON, et j'ai découvert ma passion pour la coiffure dès 
                mon plus jeune âge. Mon voyage a commencé dans les rues animées de [Ville], où j'ai 
                appris les bases du métier auprès de barbiers locaux renommés. Après des années 
                d'apprentissage et de perfectionnement, j'ai décidé de prendre mon envol et de 
                devenir freelance, une décision qui a défini le reste de ma carrière.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="philosophy-section my-6">
          <Card>
            <CardContent>
              <CardTitle>Ma Philosophie de Service</CardTitle>
              <CardDescription>
                La coiffure, pour moi, est plus qu'un simple métier - c'est une forme d'art 
                et d'expression personnelle. Mon engagement envers mes clients est de leur offrir 
                une expérience qui va au-delà de la simple coupe : c'est une transformation qui reflète 
                leur personnalité et valorise leur individualité.
              </CardDescription>
            </CardContent>
          </Card>
        </section>
        </div>

        <div className="second-line grid grid-cols-1 md:grid-cols-2 md:gap-12">
        <section className="expertise-section my-6">
          <Card>
            <CardContent>
              <CardTitle>Spécialisation et Expertise</CardTitle>
              <CardDescription>
                Ma spécialisation en coiffure pour hommes noirs est née d'une volonté de répondre 
                aux besoins spécifiques d'une texture de cheveux unique, tout en honorant une richesse 
                culturelle souvent négligée dans notre métier. En parallèle, mes services pour femmes 
                sont le reflet de ma versatilité et de ma compréhension approfondie des différentes 
                textures capillaires.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="future-perspective-section my-6">
          <Card>
            <CardContent>
              <CardTitle>Perspective Future</CardTitle>
              <CardDescription>
                Je regarde vers l'avenir avec ambition et optimisme. Mon objectif est d'élargir le spectre 
                de mes services, d'explorer de nouvelles collaborations créatives et de continuer à innover 
                dans l'art de la coiffure. Je suis ouvert aux partenariats et aux opportunités qui pourraient 
                enrichir mon parcours et celui de mes clients.
              </CardDescription>
              <Tooltip>
              <TooltipTrigger>
              <Button variant="outlineOrange">Nos Objectifs</Button>
              </TooltipTrigger>
              <TooltipContent><p>En savoir plus sur mes objectifs</p></TooltipContent>
              </Tooltip>
            </CardContent>
          </Card>
        </section>
        </div>
      </div>
    </TooltipProvider>
  );
}
