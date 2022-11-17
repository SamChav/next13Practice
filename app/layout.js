import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ //import fonts to the layout if using layout, if not put the font globally in _app.js
  weight: "300",
});
//must call body style to remove margin
export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{margin: '0px auto'}}>
        <main className={roboto.className}>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
