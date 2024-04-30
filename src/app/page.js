/* eslint-disable react/no-unescaped-entities */
// app/page.tsx
import { Button } from "../components/ui/button"; // Assure-toi que le chemin est correct
import Image from 'next/image';
import HaircutImage from "../img/haircut.webp";
import Link from "next/link";
import BeardImage from "../img/beard.webp";
import WomanImage from "../img/woman.webp";


export default function Home() {
  return (
    <main  className="flex min-h-screen flex-col items-center justify-between md:p-24">
      {/* Hero Section */}
      <section className="hero text-center mb-20">
      <div className="hero-container flex justify-center">
      <div className="hero-content w-3/4">
        <h1 className="leading-tight text-5xl">Le Style au Service de votre Identité.</h1>
        <p className="mb-4">
          Découvrez une expérience de coiffure sur-mesure, où chaque coupe et chaque 
          style sont pensés pour refléter votre unicité. Spécialiste de la coiffure pour
          hommes noirs et prestations diversifiées pour elle
        </p>
        <Link href="/reservation" passHref>
          <Button variant="secondary">Prenez Votre Rendez-vous</Button>
        </Link>
      </div>
      </div>
      </section>

      {/* Introduction Brief */}
      <section className="introduction text-center mb-20">
      <div className="introduction-container flex justify-center">
      <div className="introduction-content w-3/4">
        <h2 className="mb-4">Bienvenue Chez Roots and Styles.</h2>
        <p className="mb-4">Chez Roots And Styles,  chaque coupe est une déclaration d'identité. Fort de [x] années d'expérience dans l'art de la coiffure masculine, je me spécialise dans les textures de cheveux uniques des hommes noirs tout en offrant des services de qualité pour nos clientes. Ma passion ? Révéler la personnalité de chacun à travers des styles qui marquent. Bienvenue dans mon univers, où tradition et tendances actuelles se rencontrent.</p>
        <Link href="/about" passHref >
          <Button variant="secondary">En savoir plus</Button>
        </Link>
      </div>
      </div>
      </section>

      {/* Featured Services */}
      <section className="services mt-10">
        <h2 className="text-center mb-4">Services en Vedette</h2>
        <p className=" mb-4">
          Découvrez notre sélection de services conçus pour vous :
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Coupes Sur-Mesure */}
  <div className="card bg-custom-dark shadow-lg rounded-lg overflow-hidden">
    <div className="p-4">
    <div className="container-image flex items-center justify-center w-1/1 mb-2">
    <Image
      src={HaircutImage}
      alt="Logo"
      width={350} 
      height={350} 
    />
    </div>
      <h3 className="font-bold text-center mb-4">Coupes Sur-Mesure</h3>
      <p className="mb-5">Que vous cherchiez à affiner votre style ou à expérimenter quelque chose de nouveau, chaque coupe est une œuvre d'art personnalisée.</p>
      <div className="button-container flex justify-center">
      <Link href="/services" passHref>
        <Button variant="outlineOrange">Découvrez plus</Button>
      </Link>
    </div>
    </div>
  </div>

  {/* Soin de la Barbe */}
  <div className="card bg-custom-dark shadow-lg rounded-lg overflow-hidden">
    <div className="p-4">
    <div className="container-image flex items-center justify-center w-1/1 mb-2">
    <Image
      src={BeardImage}
      alt="Logo"
      width={350} 
      height={350} 
    />
    </div>
      <h3 className="font-bold text-center mb-4">Soin de la Barbe</h3>
      <p className="mb-5">Des tailles précises aux soins nourrissants, nous mettons en valeur chaque facette de votre barbe.</p>
      <div className="button-container flex justify-center">
      <Link href="/services" passHref>
        <Button  variant="outlineOrange">Découvrez plus</Button>
      </Link>
      </div>
    </div>
  </div>

  {/* Styles pour Elle */}
  <div className="card bg-custom-dark shadow-lg rounded-lg overflow-hidden">
    <div className="p-4">
    <div className="container-image flex items-center justify-center w-1/1 mb-4">
    <Image
      src={WomanImage}
      alt="Logo"
      width={350} 
      height={350} 
    />
    </div>

      <h3 className="font-bold text-center mb-4">Styles pour Elle</h3>
      <p className="mb-5">Nous proposons également des coiffures sophistiquées et des soins pour nos clientes, avec une attention particulière à la santé et à la beauté des cheveux.</p>
      <div className="button-container flex justify-center">
      <Link href="/services" passHref>
        <Button  variant="outlineOrange" >Découvrez plus</Button>
      </Link>
      </div>
    </div>
  </div>
</div>
      </section>

    </main>
  );
}
