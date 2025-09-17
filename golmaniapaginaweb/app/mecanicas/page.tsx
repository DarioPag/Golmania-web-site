import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Gamepad2, Trophy, Zap } from "lucide-react"

export default function MecanicasPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-300/20 to-cyan-400/20" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Settings className="w-4 h-4 mr-2" />
              Mecánicas del Juego
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 text-balance">Cómo se Juega</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Descubre los sistemas de juego que hacen de GOLMANIA una experiencia única y emocionante
            </p>
          </div>
        </div>
      </section>

      {/* Main Mechanics Image */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/game-mechanics.png" alt="Mecánicas del Videojuego GOLMANIA" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Core Mechanics */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Sistemas de Juego Principales</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tres pilares fundamentales que definen la experiencia de juego
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Gamepad2 className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Exploración y Plataformeo</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  El jugador se mueve libremente en entornos 3D. Puede correr, saltar y escalar para navegar por los
                  escenarios, encontrar coleccionables y llegar a las zonas de los desafíos.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">
                    Movimiento 3D
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    Exploración Libre
                  </Badge>
                  <Badge variant="outline">Coleccionables</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Trophy className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Desafíos de Habilidad</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  El núcleo del juego. Son pruebas cortas y variadas que reemplazan el combate tradicional. Cada país
                  tiene sus propios minijuegos temáticos únicos.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">
                    Minijuegos
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    Temáticos
                  </Badge>
                  <Badge variant="outline">Variados</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Zap className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Progresión basada en Habilidades</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Al completar los desafíos de un país, el jugador desbloquea una habilidad especial de movimiento o de
                  balón que le ayudará en futuros niveles.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">
                    Habilidades Nuevas
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    Progresión
                  </Badge>
                  <Badge variant="outline">Recompensas</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Mechanics */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Mecánicas en Detalle</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Sistema de Movimiento</h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Controles Básicos</h4>
                  <p className="text-sm text-muted-foreground">
                    Movimiento fluido en todas las direcciones, salto con control de altura, y escalada en superficies
                    marcadas.
                  </p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Interacción con el Balón</h4>
                  <p className="text-sm text-muted-foreground">
                    El protagonista siempre lleva un balón que puede usar para resolver puzzles y activar mecanismos.
                  </p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Navegación de Escenarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Cada nivel está diseñado para fomentar la exploración y el descubrimiento de secretos.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Sistema de Desafíos</h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Minijuegos Temáticos</h4>
                  <p className="text-sm text-muted-foreground">
                    Cada país presenta desafíos únicos inspirados en su cultura futbolística local.
                  </p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Dificultad Progresiva</h4>
                  <p className="text-sm text-muted-foreground">
                    Los desafíos se vuelven más complejos conforme avanzas, requiriendo las habilidades aprendidas.
                  </p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Recompensas Significativas</h4>
                  <p className="text-sm text-muted-foreground">
                    Cada desafío completado otorga fragmentos del ticket y nuevas habilidades permanentes.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progression System */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Sistema de Progresión</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Tu viaje se vuelve más emocionante con cada habilidad desbloqueada
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-xl font-bold text-foreground mb-4">Habilidades de Movimiento</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Regate más rápido y ágil</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Salto con mayor altura y distancia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Escalada en superficies más complejas</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5">
              <h3 className="text-xl font-bold text-foreground mb-4">Habilidades de Balón</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Mejor control del balón en el aire</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Tiros más precisos y potentes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Trucos especiales para puzzles</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
