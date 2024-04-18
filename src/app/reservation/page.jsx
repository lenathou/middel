/* eslint-disable react/no-unescaped-entities */
import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
function ReservationPage() {
    return (
        <main className="container mx-auto p-4">
            <section className="text-center my-6">
                <h1 className="text-3xl font-bold">Réservation en Ligne</h1>
                <p className="text-lg">Planifiez votre prochaine visite rapidement et facilement.</p>
            </section>

            <section id="calendly-widget-container" className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Prenez votre rendez-vous</h2>
                {/* Ici, vous intégrerez le widget Calendly */}
                <div className="calendly-widget">
                    <p>Widget Calendly sera intégré ici.</p>
                </div>
            </section>
            <div className="card-container grid grid-cols-1 md:grid-cols-3 gap-4">

            <section className="benefits-section my-6">
                <Card>
                    <CardContent>
                        <CardTitle>Avantages de la réservation en ligne</CardTitle>
                        <CardDescription>
                            <ul>
                                <li>Confirmation immédiate de vos rendez-vous</li>
                                <li>Rappels automatiques pour réduire le risque d'oubli</li>
                                <li>Visualisation directe des disponibilités</li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                </Card>
            </section>

            <section className="faq-section my-6">
                <Card>
                    <CardContent>
                        <CardTitle>FAQ</CardTitle>
                        <CardDescription>
                            <dl>
                                <dt>Comment annuler un rendez-vous ?</dt>
                                <dd>Vous pouvez annuler via notre plateforme en ligne jusqu'à 24h à l'avance.</dd>
                                <dt>Que faire si je suis en retard ?</dt>
                                <dd>Contactez-nous le plus tôt possible pour ajuster l'horaire.</dd>
                            </dl>
                        </CardDescription>
                    </CardContent>
                </Card>
            </section>

            <section className="contact-section my-6">
                <Card>
                    <CardContent>
                        <CardTitle>Contactez-nous</CardTitle>
                        <CardDescription>
                            Des questions ? Besoin d'aide pour votre réservation ? Contactez-nous !
                        </CardDescription>
                        <Button variant="Outlined">Nous contacter</Button>
                    </CardContent>
                </Card>
            </section>
            </div>
        </main>
    );
}

export default ReservationPage;
