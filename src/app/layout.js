import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import "./globals.css";
import PageTransitionTemplate from '../app/template';


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
      <Header />
      <main className=' relative'>
      <div className="parallax">
            <div className="bg-custom-dark bg-opacity-50 reative text-white text-lg  flex flex-col justify-between" style={{overflowX: 'hidden'}}>
          <PageTransitionTemplate >
                {children}
          </PageTransitionTemplate>
          </div>
        </div> 
        </main>
      <Footer />
      </body>
    </html>
  );
}

