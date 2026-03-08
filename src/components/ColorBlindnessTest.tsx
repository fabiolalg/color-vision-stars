import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, AlertTriangle, ArrowRight, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

import plate1 from "@/assets/test-plate-1.png";
import plate2 from "@/assets/test-plate-2.png";
import plate3 from "@/assets/test-plate-3.png";
import plate4 from "@/assets/test-plate-4.png";
import plate5 from "@/assets/test-plate-5.png";
import plate6 from "@/assets/test-plate-6.png";

interface ColorBlindnessTestProps {
  language: 'es' | 'en';
}

interface Plate {
  image: string;
  correctAnswer: number;
  options: { es: string; en: string }[];
  questionHint: { es: string; en: string };
}

const plates: Plate[] = [
  {
    image: plate1,
    correctAnswer: 0,
    options: [
      { es: "Un pez 🐟", en: "A fish 🐟" },
      { es: "Un pájaro 🐦", en: "A bird 🐦" },
      { es: "No veo nada claro", en: "I can't see clearly" },
    ],
    questionHint: { es: "Lámina 1 de 6", en: "Plate 1 of 6" },
  },
  {
    image: plate2,
    correctAnswer: 0,
    options: [
      { es: "Una estrella ⭐", en: "A star ⭐" },
      { es: "Un círculo ⚪", en: "A circle ⚪" },
      { es: "No veo nada claro", en: "I can't see clearly" },
    ],
    questionHint: { es: "Lámina 2 de 6", en: "Plate 2 of 6" },
  },
  {
    image: plate3,
    correctAnswer: 0,
    options: [
      { es: "Una mariposa 🦋", en: "A butterfly 🦋" },
      { es: "Una flor 🌸", en: "A flower 🌸" },
      { es: "No veo nada claro", en: "I can't see clearly" },
    ],
    questionHint: { es: "Lámina 3 de 6", en: "Plate 3 of 6" },
  },
  {
    image: plate4,
    correctAnswer: 0,
    options: [
      { es: "Un perrito 🐕", en: "A dog 🐕" },
      { es: "Un gato 🐱", en: "A cat 🐱" },
      { es: "No veo nada claro", en: "I can't see clearly" },
    ],
    questionHint: { es: "Lámina 4 de 6", en: "Plate 4 of 6" },
  },
  {
    image: plate5,
    correctAnswer: 0,
    options: [
      { es: "Un corazón 💚", en: "A heart 💚" },
      { es: "Un diamante 💎", en: "A diamond 💎" },
      { es: "No veo nada claro", en: "I can't see clearly" },
    ],
    questionHint: { es: "Lámina 5 de 6", en: "Plate 5 of 6" },
  },
  {
    image: plate6,
    correctAnswer: 0,
    options: [
      { es: "Un sol ☀️", en: "A sun ☀️" },
      { es: "Una luna 🌙", en: "A moon 🌙" },
      { es: "No veo nada claro", en: "I can't see clearly" },
    ],
    questionHint: { es: "Lámina 6 de 6", en: "Plate 6 of 6" },
  },
];

const content = {
  es: {
    title: "🎨 Test de Colores para Niños",
    subtitle: "¡Vamos a jugar un juego con colores y formas!",
    disclaimer: "⚠️ Este test es solo orientativo y educativo. NO es un diagnóstico médico. Para un resultado fiable, consulta siempre a un oftalmólogo.",
    question: "¿Qué ves en esta imagen?",
    startBtn: "¡Empezar el juego!",
    nextBtn: "Siguiente",
    resultsTitle: "🌟 ¡Bien hecho, campeón!",
    resultAll: "¡Has identificado todas las figuras correctamente! Parece que distingues muy bien los colores. ¡Sigue siendo genial!",
    resultSome: "Has identificado {count} de 6 figuras. ¡Lo has hecho muy bien! Algunas láminas son más difíciles que otras, y eso está perfectamente bien.",
    resultFew: "Algunas láminas fueron difíciles para ti, ¡y eso está totalmente bien! Cada persona ve los colores de una manera única y especial.",
    doctorAdvice: "💡 Recuerda: este juego es solo orientativo. Si quieres saber más sobre cómo ves los colores, pide a tus padres que te lleven a un oftalmólogo. ¡Es como una visita de superhéroe para tus ojos! 🦸‍♂️",
    restartBtn: "Jugar de nuevo",
    selected: "Tu respuesta",
  },
  en: {
    title: "🎨 Color Test for Kids",
    subtitle: "Let's play a game with colors and shapes!",
    disclaimer: "⚠️ This test is only for guidance and education. It is NOT a medical diagnosis. For reliable results, always consult an ophthalmologist.",
    question: "What do you see in this image?",
    startBtn: "Start the game!",
    nextBtn: "Next",
    resultsTitle: "🌟 Great job, champion!",
    resultAll: "You identified all the figures correctly! It seems you distinguish colors very well. Keep being awesome!",
    resultSome: "You identified {count} out of 6 figures. You did very well! Some plates are harder than others, and that's perfectly fine.",
    resultFew: "Some plates were tricky for you, and that's totally okay! Every person sees colors in their own unique and special way.",
    doctorAdvice: "💡 Remember: this game is just for fun and guidance. If you want to know more about how you see colors, ask your parents to take you to an eye doctor. It's like a superhero visit for your eyes! 🦸‍♂️",
    restartBtn: "Play again",
    selected: "Your answer",
  },
};

const ColorBlindnessTest = ({ language }: ColorBlindnessTestProps) => {
  const [started, setStarted] = useState(false);
  const [currentPlate, setCurrentPlate] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const t = content[language];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentPlate < plates.length - 1) {
      setCurrentPlate(currentPlate + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentPlate(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResults(false);
  };

  const correctCount = answers.filter(
    (answer, index) => answer === plates[index].correctAnswer
  ).length;

  const getResultMessage = () => {
    if (correctCount === 6) return t.resultAll;
    if (correctCount >= 4) return t.resultSome.replace("{count}", String(correctCount));
    return t.resultFew;
  };

  // Intro screen
  if (!started) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border bg-card p-8 md:p-10 text-center space-y-6"
      >
        <div className="inline-flex p-4 rounded-2xl bg-accent">
          <Eye className="h-10 w-10 text-accent-foreground" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold">{t.title}</h3>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">{t.subtitle}</p>
        
        <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary-light border border-secondary/20 text-left max-w-lg mx-auto">
          <AlertTriangle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground leading-relaxed">{t.disclaimer}</p>
        </div>

        <Button
          size="lg"
          onClick={() => setStarted(true)}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl px-8 py-6 text-lg group"
        >
          {t.startBtn}
          <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
        </Button>
      </motion.div>
    );
  }

  // Results screen
  if (showResults) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border bg-card p-8 md:p-10 text-center space-y-6"
      >
        <div className="inline-flex p-4 rounded-full bg-accent">
          <ShieldCheck className="h-12 w-12 text-accent-foreground" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold">{t.resultsTitle}</h3>

        {/* Score display */}
        <div className="flex justify-center gap-2 py-4">
          {plates.map((_, i) => {
            const isCorrect = answers[i] === plates[i].correctAnswer;
            return (
              <div
                key={i}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                  isCorrect
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isCorrect ? "✓" : "~"}
              </div>
            );
          })}
        </div>

        <p className="text-lg leading-relaxed max-w-lg mx-auto">{getResultMessage()}</p>

        <div className="flex items-start gap-3 p-5 rounded-xl bg-primary-light border border-primary/20 text-left max-w-lg mx-auto">
          <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground leading-relaxed">{t.doctorAdvice}</p>
        </div>

        <Button
          size="lg"
          variant="outline"
          onClick={handleRestart}
          className="rounded-xl px-8 py-6 text-lg group"
        >
          <RotateCcw className="mr-2 h-5 w-5 group-hover:-rotate-180 transition-transform duration-500" />
          {t.restartBtn}
        </Button>
      </motion.div>
    );
  }

  // Test plate screen
  const plate = plates[currentPlate];

  return (
    <div className="rounded-2xl border bg-card p-6 md:p-10 space-y-6">
      {/* Progress bar */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground font-medium text-center">
          {plate.questionHint[language]}
        </p>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentPlate + 1) / plates.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Plate image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPlate}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-elegant border-4 border-muted">
            <img
              src={plate.image}
              alt={`Test plate ${currentPlate + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Question */}
      <h4 className="text-xl md:text-2xl font-bold text-center">{t.question}</h4>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
        {plate.options.map((option, i) => {
          const isSelected = selectedAnswer === i;
          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className={`p-4 rounded-xl border-2 text-left sm:text-center font-medium text-lg transition-smooth ${
                isSelected
                  ? "border-primary bg-primary-light text-foreground shadow-elegant"
                  : "border-border bg-card hover:border-primary/40 hover:bg-muted/50 text-foreground"
              }`}
            >
              {option[language]}
              {isSelected && (
                <span className="block text-xs text-muted-foreground mt-1">{t.selected}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="rounded-xl px-8 py-6 text-lg group"
        >
          {currentPlate < plates.length - 1 ? t.nextBtn : (language === 'es' ? 'Ver resultado' : 'See result')}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Disclaimer reminder */}
      <p className="text-xs text-muted-foreground text-center italic max-w-md mx-auto">
        {t.disclaimer}
      </p>
    </div>
  );
};

export default ColorBlindnessTest;
