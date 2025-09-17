import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, MapPin, Trophy } from "lucide-react"

export default function ObjetivosPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-pink-300/20 to-purple-400/20" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Target className="w-4 h-4 mr-2" />
              Metas del Videojuego
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 text-balance">Objetivos del Juego</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Descubre las metas principales que guiarán tu aventura en GOLMANIA
            </p>
          </div>
        </div>
      </section>

      {/* Main Goals Image */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/game-goals.png" alt="Metas del Videojuego GOLMANIA" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Detailed Goals */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">1. Iniciar el Viaje</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comenzar la aventura en el Aeropuerto Internacional, que funciona como el hub central del juego donde
                  inicia tu épica búsqueda.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">2. Explorar México</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Viajar a México y explorar la vibrante "Plaza Colorida", superando sus dos emocionantes minijuegos de
                  desafío.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">3. Obtener el Fragmento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conseguir el primer fragmento del Ticket Dorado como recompensa por completar exitosamente todos los
                  desafíos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Context */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">El Comienzo de una Gran Aventura</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Estos objetivos representan solo el inicio de tu viaje. Cada fragmento del ticket dorado te acercará más a
            tu sueño de asistir a la final del Mundial, mientras descubres la rica cultura futbolística de cada país.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm">
              Aventura Global
            </Badge>
            <Badge variant="outline" className="text-sm">
              Cultura Futbolística
            </Badge>
            <Badge variant="outline" className="text-sm">
              Desafíos Únicos
            </Badge>
            <Badge variant="outline" className="text-sm">
              Progresión Épica
            </Badge>
          </div>
        </div>
      </section>
    </div>
  )
}
