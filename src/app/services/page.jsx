import * as React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ServicesPage() {
    return (
        <main className="container p-4">
            <section className="my-6">
                <h1 className="text-3xl font-bold text-center">Nos Services</h1>
                <p className="text-lg text-center">Découvrez une gamme complète de services conçus pour vous.</p>
            </section>

            <div className="flex flex-wrap justify-center gap-10">
                {/* Carte pour les services hommes */}
                <Card variant='secondary' className="max-w-md">
                    <CardContent>
                        <CardTitle>Services pour Hommes</CardTitle>
                        <CardDescription>
                            Offres variées adaptées aux besoins spécifiques des hommes, incluant des coupes de cheveux classiques et modernes, soins de la barbe et plus.
                        </CardDescription>
                        {/* Liste des services pour hommes */}
                        <div className="space-y-2 mt-4">
                            <p><strong>Coupe Classique:</strong> 30€</p>
                            <p><strong>Soins de la Barbe:</strong> 20€</p>
                            <p><strong>Coloration:</strong> 40€</p>
                        </div>
                        <Button variant="primary" className="mt-4">Détails</Button>
                    </CardContent>
                </Card>

                {/* Carte pour les services femmes */}
                <Card className="max-w-md">
                    <CardContent>
                        <CardTitle>Services pour Femmes</CardTitle>
                        <CardDescription>
                            Une sélection de services comprenant des coupes, des soins capillaires et des traitements de beauté spécialement conçus pour elles.
                        </CardDescription>
                        {/* Liste des services pour femmes */}
                        <div className="space-y-2 mt-4">
                            <p><strong>Coupe et Style:</strong> 50€</p>
                            <p><strong>Soins Capillaires:</strong> 35€</p>
                            <p><strong>Manucure:</strong> 25€</p>
                        </div>
                        <Button variant="outlineOrange" className="mt-4">Découvrez plus</Button>
                    </CardContent>
                </Card>
            </div>

            <section className="my-6">
                <h2 className="text-2xl font-bold">Avant et Après</h2>
                <div className="grid grid-cols-3 gap-4">
                    <Card>
                        <CardContent>
                            <p>Transformation impressionnante par nos experts.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="my-6">
                <h2 className="text-2xl font-bold">Contact et Localisation</h2>
                <p>Trouvez toutes les informations pour nous rejoindre facilement.</p>
                {/* Inclusion d'une carte interactive si nécessaire */}
            </section>
        </main>
    );
}

export default ServicesPage;
