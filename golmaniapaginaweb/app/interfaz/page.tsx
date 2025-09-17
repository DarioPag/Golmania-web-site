import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Play, Settings, RotateCcw } from "lucide-react"

export default function InterfazPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-300/20 to-teal-400/20" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Monitor className="w-4 h-4 mr-2" />
              Interfaz del Juego
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 text-balance">Menú de Inicio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Descubre el diseño intuitivo y atractivo de la interfaz principal de GOLMANIA
            </p>
          </div>
        </div>
      </section>

      {/* Main Interface Image */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/game-interface.png" alt="Interfaz - Menú de inicio GOLMANIA" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Interface Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Elementos de la Interfaz</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un diseño limpio y funcional que refleja la estética del juego
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Play className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">NEW GAME</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Inicia una nueva aventura desde el principio. Comienza tu viaje para recolectar los fragmentos del
                  ticket dorado.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <RotateCcw className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">CONTINUE</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continúa tu progreso guardado. Retoma tu aventura desde donde la dejaste en tu búsqueda global.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Settings className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">OPTIONS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Personaliza tu experiencia de juego. Ajusta controles, audio, gráficos y otras configuraciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Filosofía de Diseño</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Estética Deportiva</h3>
              <p className="text-muted-foreground leading-relaxed">
                El fondo muestra un campo de fútbol desenfocado que establece inmediatamente el contexto deportivo del
                juego, creando una conexión visual directa con la temática futbolística.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Tipografía Impactante</h3>
              <p className="text-muted-foreground leading-relaxed">
                El logo GOLMANIA utiliza una fuente con efecto de goteo que refleja el estilo street art del juego,
                manteniendo la coherencia visual con la identidad gráfica general.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Navegación Clara</h3>
              <p className="text-muted-foreground leading-relaxed">
                Los botones del menú están claramente definidos con bordes blancos sobre el fondo, garantizando una
                navegación intuitiva y accesible para todos los jugadores.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Inmersión Inmediata</h3>
              <p className="text-muted-foreground leading-relaxed">
                La combinación del logo prominente con el fondo futbolístico crea una experiencia inmersiva desde el
                primer momento que el jugador inicia el juego.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
