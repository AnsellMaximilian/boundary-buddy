export type Level = {
  title: string;
  description: string;
  questions: Question[];
};

export type Question = {
  questionText: string;
  choices: Choice[];
};

export type Choice = {
  choiceText: string;
  isCorrect: boolean;
};
