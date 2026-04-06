import { Switch, Route } from "wouter";
import { Header, Footer } from "@/components/Layout";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "hsl(220 22% 6%)", color: "hsl(0 0% 95%)" }}>
      <Header />
      <div className="flex-1">
        <Switch>
          <Route path="/" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfUse} />
          <Route>
            <div className="pt-40 text-center" style={{ color: "hsl(220 10% 40%)" }}>
              <p className="text-6xl font-black mb-4">404</p>
              <p>Page introuvable</p>
            </div>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
